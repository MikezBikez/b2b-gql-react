import gql from 'graphql-tag'

export default gql`
  query PeopleList {
    people{
      id
      name
      surname
      avatar
      lastAttend
    }
  }
`