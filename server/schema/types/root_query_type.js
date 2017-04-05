const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList } = require('graphql') 
const PersonType = require('./person_type')

const mongoose = require('mongoose')
const Person = mongoose.model('person')
const suga = require('sugar')
 
const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    people: {
      type:  new GraphQLList(PersonType),
      args: {},
      resolve(parentValue, args, req) {
        return Person.find({})
      }
    },
    checkedIn: {
      type:  new GraphQLList(PersonType),
      args: {},
      resolve(parentValue, args, req) {
        return Person.find({lastAttend: suga.Date.create('today')})
      }
    },
    notCheckedIn: {
      type:  new GraphQLList(PersonType),
      args: {},
      resolve(parentValue, args, req) {
        return Person.find({lastAttend: { $ne: suga.Date.create('today') } })
      }
    },
  }
})

module.exports = RootQueryType;
