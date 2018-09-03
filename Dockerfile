# Build environment
FROM node:10-alpine as builder

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
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install @babel/runtime@7.0.0-beta.55
COPY . /usr/src/app
RUN npm run build

# production environment
FROM nginx:1.15.2-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]