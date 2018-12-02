FROM node:alpine

EXPOSE 8080

WORKDIR /usr/wheresmycar

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "index.js"]