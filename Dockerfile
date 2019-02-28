# Build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY app/package*.json ./
RUN npm install
COPY app .
RUN npm run build

# Set API credentials
ARG api_user
ENV REACT_APP_API_USER="$api_user"
ARG api_pass
ENV REACT_APP_API_PASS="$api_pass"

# Production stage
FROM nginx:stable-alpine as production-stage

# Copy Nginx configuration files
COPY nginx_conf /etc/nginx/

COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]