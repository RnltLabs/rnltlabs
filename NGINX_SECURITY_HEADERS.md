# Nginx Security Headers Configuration

**Linear Issue**: RNLT-31 - [CRITICAL] Add Security Headers to Nginx Configuration
**URL**: https://linear.app/rnlt-labs/issue/RNLT-31

## Problem

Current nginx.conf is missing critical security headers, exposing the site to:
- ❌ Clickjacking (no X-Frame-Options)
- ❌ XSS attacks (no Content-Security-Policy)
- ❌ MIME-sniffing (no X-Content-Type-Options)
- ❌ Information leakage (server version exposed)

**OWASP Category**: A05:2021 - Security Misconfiguration

---

## Solution

Update `/nginx.conf` with the following configuration:

```nginx
server {
    listen 3000;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html;

    # ====================================
    # SECURITY HEADERS (RNLT-31)
    # ====================================

    # Prevent clickjacking - don't allow site to be embedded in iframes
    add_header X-Frame-Options "DENY" always;

    # Prevent MIME type sniffing
    add_header X-Content-Type-Options "nosniff" always;

    # Enable XSS protection in older browsers
    add_header X-XSS-Protection "1; mode=block" always;

    # Control referrer information
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Restrict browser features
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;

    # Content Security Policy (STRICT)
    # Allows: self-hosted content, analytics.rnltlabs.de, errors.rnltlabs.de
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' https://analytics.rnltlabs.de https://errors.rnltlabs.de 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://analytics.rnltlabs.de https://errors.rnltlabs.de; frame-ancestors 'none'; base-uri 'self'; form-action 'self';" always;

    # Hide nginx version number
    server_tokens off;

    # ====================================
    # END SECURITY HEADERS
    # ====================================

    # SPA routing - serve index.html for all routes
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets with security headers
    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";

        # Inherit security headers for static files
        add_header X-Frame-Options "DENY" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    }
}
```

---

## Explanation of Security Headers

### X-Frame-Options: DENY
**Purpose**: Prevents clickjacking attacks
**Action**: Blocks the site from being embedded in `<iframe>`, `<frame>`, or `<object>` elements
**Risk if missing**: Attackers can overlay transparent frames to trick users into clicking malicious links

### X-Content-Type-Options: nosniff
**Purpose**: Prevents MIME type sniffing
**Action**: Forces browser to respect `Content-Type` header
**Risk if missing**: Attacker can upload a file (e.g., .jpg) containing JavaScript and browser may execute it

### X-XSS-Protection: 1; mode=block
**Purpose**: Enables XSS filter in older browsers (Chrome, Safari, IE)
**Action**: Blocks page if XSS attack detected
**Note**: Modern browsers use CSP instead, but this provides defense-in-depth

### Referrer-Policy: strict-origin-when-cross-origin
**Purpose**: Controls referrer information sent to external sites
**Action**: Sends full URL for same-origin, only origin for cross-origin HTTPS, nothing for HTTP
**Privacy**: Reduces information leakage to third parties

### Permissions-Policy
**Purpose**: Restricts browser features
**Action**: Disables camera, microphone, geolocation access
**Privacy**: Prevents unexpected permission requests

### Content-Security-Policy (CSP)
**Purpose**: Prevents XSS, injection attacks, unauthorized resource loading
**Action**: Whitelist of allowed sources for scripts, styles, images, etc.

**Policy Breakdown**:
- `default-src 'self'` - Only load resources from same origin by default
- `script-src 'self' https://analytics.rnltlabs.de https://errors.rnltlabs.de 'unsafe-inline'` - Allow scripts from self, Umami, GlitchTip, and inline scripts (React)
- `style-src 'self' 'unsafe-inline'` - Allow styles from self and inline (Tailwind uses inline styles)
- `img-src 'self' data: https:` - Allow images from self, data URIs, and any HTTPS source
- `font-src 'self' data:` - Allow fonts from self and data URIs
- `connect-src 'self' https://analytics.rnltlabs.de https://errors.rnltlabs.de` - Allow AJAX/fetch to self, Umami, GlitchTip
- `frame-ancestors 'none'` - Don't allow embedding (same as X-Frame-Options)
- `base-uri 'self'` - Restrict `<base>` tag to same origin
- `form-action 'self'` - Forms can only submit to same origin

**Note**: `'unsafe-inline'` is required for React and Tailwind CSS. In the future, consider using CSP nonces for better security.

### server_tokens off
**Purpose**: Hides nginx version number
**Action**: Removes `Server: nginx/1.x.x` from HTTP headers
**Security**: Reduces information disclosure that helps attackers find version-specific vulnerabilities

---

## Testing

After deploying the nginx configuration, verify security headers are present:

```bash
# Test from command line
curl -I https://rnltlabs.de/

# Should see headers like:
# X-Frame-Options: DENY
# X-Content-Type-Options: nosniff
# Content-Security-Policy: default-src 'self'; ...
# Referrer-Policy: strict-origin-when-cross-origin
# Permissions-Policy: camera=(), microphone=(), geolocation=()
```

**Online Testing Tools**:
- https://securityheaders.com/?q=rnltlabs.de
- https://observatory.mozilla.org/analyze/rnltlabs.de
- Chrome DevTools → Network → Response Headers

**Expected Score**: A+ on securityheaders.com

---

## Deployment Steps

### Docker Deployment

1. Update `nginx.conf` in project root
2. Rebuild Docker image:
   ```bash
   docker build -t rnltlabs-web .
   ```
3. Restart container:
   ```bash
   docker stop rnltlabs-web
   docker rm rnltlabs-web
   docker run -d -p 3000:3000 --name rnltlabs-web rnltlabs-web
   ```
4. Verify headers:
   ```bash
   curl -I http://localhost:3000/
   ```

### Kubernetes Deployment

1. Update ConfigMap for nginx.conf
2. Apply changes:
   ```bash
   kubectl apply -f k8s/nginx-configmap.yaml
   ```
3. Rollout restart:
   ```bash
   kubectl rollout restart deployment/rnltlabs-web
   ```
4. Verify from pod:
   ```bash
   kubectl exec -it rnltlabs-web-xxx -- nginx -T
   ```

### Direct Server Deployment

1. SSH to server
2. Edit `/etc/nginx/sites-available/rnltlabs.de`
3. Test configuration:
   ```bash
   sudo nginx -t
   ```
4. Reload nginx:
   ```bash
   sudo systemctl reload nginx
   ```
5. Verify:
   ```bash
   curl -I https://rnltlabs.de/
   ```

---

## Acceptance Criteria

- [ ] All security headers added to nginx.conf
- [ ] CSP configured for analytics.rnltlabs.de, errors.rnltlabs.de
- [ ] Server tokens disabled
- [ ] Headers verified with `curl -I https://rnltlabs.de/`
- [ ] securityheaders.com score: A+
- [ ] No console errors from CSP violations
- [ ] Umami Analytics still works
- [ ] GlitchTip error tracking still works

---

## Troubleshooting

### Issue: CSP blocks Umami Analytics

**Symptom**: Console error: `Refused to load script from 'https://analytics.rnltlabs.de/script.js' because it violates CSP`

**Solution**: Ensure `script-src` includes `https://analytics.rnltlabs.de`:
```nginx
add_header Content-Security-Policy "... script-src 'self' https://analytics.rnltlabs.de ...
```

### Issue: Styles broken after CSP

**Symptom**: Website has no styling

**Solution**: Ensure `style-src` includes `'unsafe-inline'` (required for Tailwind):
```nginx
add_header Content-Security-Policy "... style-src 'self' 'unsafe-inline' ...
```

### Issue: Images don't load

**Symptom**: OG image or founder image broken

**Solution**: Ensure `img-src` includes `data:` and `https:`:
```nginx
add_header Content-Security-Policy "... img-src 'self' data: https: ...
```

---

## Additional Security Recommendations

### 1. HTTPS Redirect (if behind reverse proxy)

```nginx
# Uncomment if using HTTPS
if ($http_x_forwarded_proto != 'https') {
    return 301 https://$host$request_uri;
}
```

### 2. HSTS (HTTP Strict Transport Security)

**After HTTPS is stable**, add HSTS:

```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
```

**Warning**: Only enable after confirming HTTPS works for all subdomains. HSTS preload is permanent and irreversible.

### 3. Rate Limiting

Protect against DDoS and brute force:

```nginx
# Define rate limit zone (outside server block)
limit_req_zone $binary_remote_addr zone=one:10m rate=10r/s;

# Apply rate limit (inside server block)
location / {
    limit_req zone=one burst=20 nodelay;
    try_files $uri $uri/ /index.html;
}
```

---

## References

- **OWASP Secure Headers Project**: https://owasp.org/www-project-secure-headers/
- **MDN Web Security**: https://developer.mozilla.org/en-US/docs/Web/Security
- **CSP Evaluator**: https://csp-evaluator.withgoogle.com/
- **Security Headers Scanner**: https://securityheaders.com/

---

**Status**: Ready for deployment
**Priority**: CRITICAL
**Deadline**: 24 hours
**Owner**: DevOps / Deployment Team

---

**Date**: 2025-10-26
**Author**: Claude Code (security-auditor agent)
**Linear Issue**: RNLT-31
