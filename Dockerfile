FROM hypriot/rpi-node:6

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock /usr/src/app/
RUN npm set progress=false
RUN npm config set registry http://registry.npmjs.org/
RUN yarn config set cache-folder /usr/yarn/cache
RUN yarn install

# Build project
RUN yarn run build:prod

# Set a volume on node_modules for caching purpose
VOLUME /usr/src/app/node_modules
VOLUME /usr/yarn/cache

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "node", "server/index.js" ]