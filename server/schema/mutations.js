const graphql = require('graphql')
const PersonType = require('./types/person_type')
const suga = require('sugar')

const mongoose = require('mongoose')
const Person = mongoose.model('person')
 
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} = graphql

const mutation = new GraphQLObjectType({
  name: 'Mutation', 
  fields: {
    addPerson: {
      type: PersonType,
      args: {
        name: {type: GraphQLString},
        surname: {type: GraphQLString},
        avatar: {type: GraphQLString},
      },
      resolve(parentValue, {name, surname, avatar} , req) {
        return (new Person({name, surname, avatar, lastAttend: suga.Date.create('yesterday')}).save() )
      }
    },
    removePerson: {
      type: PersonType,
      args: {
        id: {type: GraphQLID}
      },
      resolve(parentValue, {id} , req) {
        return Person.remove({_id: id})
      }
    },
    updatePerson: {
      type: PersonType,
      args: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        surname: {type: GraphQLString},
        avatar: {type: GraphQLString},
      },
      resolve(parentValue, args , req) {
        return Person.findById(args.id).then(p => {
          p.name = (args.name) ? args.name : p.name
          p.surname = (args.surname) ? args.surname : p.surname
          p.avatar= (args.avatar) ? args.avatar : p.avatar
          return p.save()
        })
      }
    },    
    checkIn: {
      type: PersonType,
      args: {
        id: {type: GraphQLID}
      },
      resolve(parentValue, {id} , req) {
        return Person.findById(id).then(p => {
          p.lastAttend = suga.Date.create('today')
          return p.save()
        })
      }
    },
  },
})

module.exports = mutation