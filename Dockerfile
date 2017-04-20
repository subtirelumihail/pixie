FROM hypriot/rpi-node:6

# Create app directory
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/node_modules

# Set a volume on node_modules for caching purpose
VOLUME /usr/src/app/node_modules

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm set progress=false
RUN npm config set registry http://registry.npmjs.org/
RUN npm install

WORKDIR /usr/src/app
RUN yarn run build:prod

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "node", "server/index.js" ]