import React from 'react'
import {graphql} from 'react-apollo'
import query from '../queries/notCheckedInList'
import Loader from './Loader'

const CheckIn = (props) => {

  const handleCheckin = (id) => props.history.push(`/people/${id}/confirmCheckin`)

  const renderItems = (notCheckedIn) => 
      notCheckedIn.map( ({ id, name, surname}) => 
        <li key={id} className="collection-item">
          {name} {surname}
            <a className="waves-effect waves-light btn right floated"
              onClick={ () => handleCheckin(id) } >
              Checkin
            </a>
        </li>
      )

  if (props.data.loading) {return <Loader />}
  
  return (
    <ul className="collection with-header">
      <li className="collection-header"><h4>Ready for Check In</h4></li>
      {renderItems(props.data.notCheckedIn)}
    </ul>
  ) 
}

export default graphql(query)(CheckIn)