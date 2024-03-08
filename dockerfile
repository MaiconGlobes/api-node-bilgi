FROM node:16-alpine

WORKDIR /usr/app

ENV DOCKERIZE_VERSION v0.7.0

RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget

COPY ./package.json ./

COPY . .

RUN npm install yarn

RUN yarn

RUN chmod +x /usr/app/scripts/entrypoint.sh

RUN chmod 777 /usr/app/scripts/entrypoint.sh

EXPOSE 3000
