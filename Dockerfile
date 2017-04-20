FROM hypriot/rpi-node:latest

RUN yarn install
RUN yarn build:prod

ADD . /src
WORKDIR /src

EXPOSE 80

CMD ["node", "server/index.js"]