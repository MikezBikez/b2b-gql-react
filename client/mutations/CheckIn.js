import gql from 'graphql-tag'

let CheckInMutation = gql`
  mutation CheckIn($id: ID)
  {
    checkIn(id: $id){
      id
      lastAttend
      isCheckedIn
    }
  }
`;

let CheckOut = gql`
  mutation CheckOut($id: ID)
  {
    checkOut(id: $id){
      id
      isCheckedIn
    }
  }
`


export {CheckInMutation, CheckOut};
