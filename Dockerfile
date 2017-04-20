FROM hypriot/rpi-node:6

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm config set registry https://registry.npmjs.org/
RUN npm install
VOLUME /usr/src/app/node_modules

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "node", "server/index.js" ]