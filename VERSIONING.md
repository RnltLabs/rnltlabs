# Automatic Versioning Guide

This project uses automated version bumping based on PR labels when merging to `main`.

## How It Works

When you merge a PR to `main`, GitHub Actions automatically:
1. Detects the PR label (`release:major`, `release:minor`, or `release:patch`)
2. Bumps the version in `package.json`
3. Creates a git tag (e.g., `v1.1.0`)
4. Pushes the tag to GitHub
5. Creates a GitHub Release with release notes

## PR Labels

Add ONE of these labels to your PR before merging:

### `release:major` (Breaking Changes)
- Version: `1.0.3` → `2.0.0`
- Use for: Breaking API changes, major rewrites

**Example:**
```
- Removed legacy authentication system
- Changed API endpoints structure
- New tech stack (React 18 → React 19)
```

### `release:minor` (New Features)
- Version: `1.0.3` → `1.1.0`
- Use for: New features, non-breaking improvements

**Example:**
```
- Added cookie consent banner (RNLT-30)
- Implemented code-splitting (RNLT-34)
- New WorkflowEvolution component
```

### `release:patch` (Bugfixes)
- Version: `1.0.3` → `1.0.4`
- Use for: Bugfixes, small tweaks, security patches

**Example:**
```
- Fixed Vite vulnerability (RNLT-32)
- Fixed TypeScript 'any' types
- Fixed image optimization script
```

### No Label
- Version stays the same
- Use for: Documentation updates, CI/CD changes, chores

## Manual Versioning (if needed)

If you need to bump version manually:

```bash
# Patch (bugfix)
npm version patch

# Minor (new feature)
npm version minor

# Major (breaking change)
npm version major

# Custom version
npm version 1.2.3

# Push tag
git push --follow-tags
```

## Workflow Examples

### Example 1: Feature PR

```bash
# Create PR
gh pr create --title "Add GDPR Cookie Consent" --label "release:minor"

# Merge PR → Automatically bumps to 1.1.0
```

### Example 2: Bugfix PR

```bash
# Create PR
gh pr create --title "Fix Vite CVE-2025" --label "release:patch"

# Merge PR → Automatically bumps to 1.0.4
```

### Example 3: Breaking Change

```bash
# Create PR
gh pr create --title "Migrate to React 19" --label "release:major"

# Merge PR → Automatically bumps to 2.0.0
```

## GitHub Actions Workflow

Located in: `.github/workflows/version-bump-label.yml`

**Triggers:**
- When PR is merged to `main`
- Checks for `release:*` labels
- Skips if no label found

**What it does:**
1. Checkout `main` branch
2. Detect PR label
3. Run `npm version [major|minor|patch]`
4. Create git tag (e.g., `v1.1.0`)
5. Push tag to GitHub
6. Create GitHub Release

## Release Notes

Release notes are automatically generated from:
- PR title
- PR description
- PR number and author

**Example Release:**

```
Release v1.1.0

## Release Notes

Comprehensive website audit fixes: GDPR consent, performance, security

- RNLT-30: GDPR Cookie Consent Banner
- RNLT-32: Vite Vulnerability Patch
- RNLT-34: Code-Splitting (-77% bundle size)
- RNLT-35: Image Optimization (-93% images)

PR: #21
Author: @romanreinelt
```

## Semantic Versioning (SemVer)

We follow [Semantic Versioning 2.0.0](https://semver.org/):

```
MAJOR.MINOR.PATCH
  |     |     |
  |     |     └─ Bugfixes (1.0.3 → 1.0.4)
  |     └─────── New features (1.0.3 → 1.1.0)
  └───────────── Breaking changes (1.0.3 → 2.0.0)
```

**Rules:**
- MAJOR: Incompatible API changes
- MINOR: Backwards-compatible new features
- PATCH: Backwards-compatible bugfixes

## Checking Current Version

```bash
# In package.json
cat package.json | grep version

# From npm
npm version

# From git tags
git tag -l
```

## Troubleshooting

### Q: Version didn't bump after merging PR
**A:** Check if PR had a `release:*` label. Add label and re-run workflow.

### Q: Wrong version bump
**A:** Wrong label was used. Manually fix:
```bash
git tag -d v1.1.0  # Delete wrong tag locally
git push origin :refs/tags/v1.1.0  # Delete from GitHub
npm version 1.0.4  # Correct version
git push --follow-tags
```

### Q: How to skip version bump?
**A:** Don't add any `release:*` label to the PR.

### Q: Can I bump version in develop branch?
**A:** No, auto-versioning only works on `main`. This is intentional to keep production versions clean.

## Best Practices

1. ✅ **Always add a release label** to PRs going to `main`
2. ✅ **Use semantic versioning** correctly
3. ✅ **Write good PR descriptions** (they become release notes)
4. ✅ **Test on develop first** before merging to main
5. ❌ **Don't manually edit version** in package.json
6. ❌ **Don't commit package.json** with bumped version (let CI do it)

## Future Improvements

- [ ] Conventional Commits support (`feat:`, `fix:`, `BREAKING:`)
- [ ] Automatic changelog generation
- [ ] Version bump preview in PR comments
- [ ] Slack notifications for new releases
- [ ] Deploy production automatically after version bump

---

**Last Updated**: 2025-10-26
**Maintained By**: DevOps Team
