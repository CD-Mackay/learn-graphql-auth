const graphql = require('graphql');
const { 
  GraphQLObjectType,
  GraphQLString
} = graphql;

const UserType = require('./types/user_type');

const mutation = newGraphQLObjectType({
  name: 'mutation',
  fields: {

  }
});

module.exports = mutation;