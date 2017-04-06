import gql from 'graphql-tag'

export default gql`
  mutation CheckIn($id: ID)
  {
    checkIn(id: $id){
      id
      lastAttend
    }
  }
`
