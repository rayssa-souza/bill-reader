FROM node:current-alpine3.20

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

COPY .env .env

EXPOSE 3000 

RUN npm run build

CMD ["npm","start"]