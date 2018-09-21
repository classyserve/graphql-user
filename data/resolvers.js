'use strict';

const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const slugify = require('slugify');
require('dotenv').config();


const resolvers = {
    Query: {
        async hello(_){
            return 'Hello World';
        }
    }, 
    Mutation: {
        async login(_, {email, password}){
            const user = await User.findOne({where: {email}});

            if(!user){
                throw new Error('No user with that email');
            }

            const valid = bcrypt.compare(password, user.password);

            if(!valid){
                throw new Error('Incorrect Password');
            }

            // return jwt.sign({
            //     id: user.id,
            //     email: user.email
            // }, process.env.JWT_SECRET, { expiresIn: '1y' });
            return 'Hello ' +  user.firstName + " " + user.lastName + "!!";
        }, 
        async register(_, { firstName, lastName, email, password }) {

            const user = await User.findOne({where: {email}});

            if(user){
                throw new Error('Email already registered');
            }

            if(password.length < 8){
                throw new Error('Password must have minimum 8 characters')
            }

            return await User.create({
                firstName,
                lastName,
                email,
                password: await bcrypt.hash(password, 10)
            });
        }
    }, 
}

module.exports = {resolvers};