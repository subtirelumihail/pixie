FROM node:6

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install yarn
RUN cd /opt \
    wget https://yarnpkg.com/latest.tar.gz \
    tar zvxf latest.tar.gz

# Install app dependencies
COPY package.json yarn.lock /usr/src/app/
RUN yarn config set cache-folder /usr/yarn/cache
RUN yarn install

# Bundle app source
COPY . /usr/src/app

# Build project
RUN yarn run build:prod

# Set a volume on node_modules for caching purpose
VOLUME /usr/src/app/node_modules
VOLUME /usr/yarn/cache


EXPOSE 8080
CMD [ "node", "server/index.js" ]