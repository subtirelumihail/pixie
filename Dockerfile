FROM hypriot/rpi-node:latest

# Create app directory
RUN mkdir -p /usr/src/app

# Bundle app source
COPY build /usr/src/app/build
COPY server /usr/src/app

WORKDIR /usr/src/app

EXPOSE 8080
CMD [ "node", "index.js" ]