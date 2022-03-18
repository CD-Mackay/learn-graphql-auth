const graphql = require('graphql');
const { 
  GraphQLObjectType,
  GraphQLString
} = graphql;
const AuthService = require('../services/auth');
const UserType = require('./types/user_type');

const mutation = newGraphQLObjectType({
  name: 'mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req});
      }
    }
  }
});

module.exports = mutation;