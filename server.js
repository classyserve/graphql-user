'use strict';

const jwt = require('express-jwt');
require('dotenv').config();
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const PORT = 3000;
const app = express();

app.use('/api', jwt({secret: process.env.JWT_SECRET, credentialsRequired: false}));

const {typeDefs} = require('./data/schema');
const {resolvers} = require('./data/resolvers');

const server = new ApolloServer({
    typeDefs: typeDefs, 
    resolvers: resolvers, 
    context: ({req}) => ({
        authUser: req.user
      })
});

server.applyMiddleware({ app: app, path: '/api' });
app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
)
