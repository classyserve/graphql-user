FROM node:8.11

# create project dir
WORKDIR /graphql

COPY package*.json ./

RUN npm install

RUN npm install sequelize-cli

COPY . .
