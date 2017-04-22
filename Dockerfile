FROM subtirelumihail/rpi-node

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD . /usr/src/app

VOLUME /usr/src/app

EXPOSE 8080
CMD [ "node", "server/index.js" ]