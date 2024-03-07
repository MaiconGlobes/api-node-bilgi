FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install yarn

RUN yarn add --dev typescript

RUN npm cache clean --force 
RUN rm -rf node_modules    

COPY . .

RUN yarn add prisma   
RUN yarn add ts-node

EXPOSE 3005

CMD [ "yarn", "start" ]
