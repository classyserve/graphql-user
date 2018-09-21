'use strict';
const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const { gql } = require('apollo-server-express');
// Define our schema using the GraphQL schema language
const typeDefs = gql`
    scalar DateTime
    type User {
        id: Int!
        firstName: String!
        lastName: String!
        email: String!
    }
    type Mutation {
        login (
            email: String!,
            password: String!
        ): String
        register (
            firstName: String!,
            lastName: String,
            email: String!,
            password: String!
        ): User
    }
    type Query {
        hello: String
    }
`;

module.exports = {typeDefs};