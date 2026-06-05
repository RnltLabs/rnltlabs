# Build Stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Build arg to bust cache when code changes
ARG GIT_COMMIT=unknown
RUN echo "Building commit: $GIT_COMMIT"

# Copy source code
COPY . .

# Build-time env for Vite (public Web3Forms client key, injected from a CI secret)
ARG VITE_WEB3FORMS_ACCESS_KEY
ENV VITE_WEB3FORMS_ACCESS_KEY=$VITE_WEB3FORMS_ACCESS_KEY

# Build the app
RUN npm run build

# Production Stage
FROM nginx:alpine

# Copy custom nginx config + shared security-headers snippet
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx-security-headers.conf /etc/nginx/snippets/security-headers.conf

# Copy built files from builder stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 3000
EXPOSE 3000

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
