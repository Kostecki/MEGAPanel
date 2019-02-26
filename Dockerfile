# Build environment
FROM node:alpine as builder

# Set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Set API credentials
ARG api_user
ENV REACT_APP_API_USER="$api_user"
ARG api_pass
ENV REACT_APP_API_PASS="$api_pass"

# Install and cache app dependencies
COPY /app /usr/src/app
RUN npm install
RUN npm run build

# production environment
FROM nginx:mainline-alpine

# Copy the respective nginx configuration files
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]