const { GraphQLSchema } = require('graphql') 
const RootQueryType = require('./types/root_query_type')
const mutations = require('./mutations')
// import mutation from './mutations'

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: mutations
})
