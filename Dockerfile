FROM node:10-alpine
RUN apk add --no-cache bash

WORKDIR /usr/app

COPY package*.json ./

RUN npm i -g @adonisjs/cli
RUN npm install

COPY . .

EXPOSE 8001

CMD [ "npm", "start" ]
