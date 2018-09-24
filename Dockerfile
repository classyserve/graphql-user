FROM node:10.10

# create project dir
WORKDIR /graphql

COPY package*.json ./

RUN npm install

RUN npm install sequelize-cli

COPY . .

RUN chmod +x waitformysql.sh
