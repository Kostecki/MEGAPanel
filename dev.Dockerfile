# Base image
FROM node:10-alpine

# Set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install and cache app dependencies
COPY /app/package.json /usr/src/app/package.json
RUN npm install

# start app
CMD ["npm", "run", "serve"]