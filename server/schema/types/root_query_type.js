const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList } = require('graphql') 
const PersonType = require('./person_type')
 
const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    people: {
      type:  PersonType,
      resolve(parentValue, args, req) {
        return req.user
      }
    },
  }
})

module.exports = RootQueryType;
