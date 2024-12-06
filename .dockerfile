FROM node:18-alpine

WORKDIR /doanthaybinh

COPY package.json .
COPY . .

RUN npm install 

CMD ["npm", "start"]