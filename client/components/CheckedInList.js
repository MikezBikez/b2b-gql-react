import React from 'react'
import {graphql} from 'react-apollo'
import query from '../queries/CheckedInList'
import Loader from './Loader'
import {hashHistory} from 'react-router'

const CheckedInList = (props) => {

  const handleCheckout = (id) => props.history.push(`/people/${id}/confirmCheckout`)
  
  const renderItems = (checkedIn) => 
      checkedIn.map( ({ id, name, surname}) => 
        <li key={id} className="collection-item">
          {name} {surname}
            <a className="waves-effect waves-light btn btn-xs mini right floated"
              onClick={ () => handleCheckout(id) } >
              Checkout
            </a>
        </li>
      )

    if (props.data.loading) {return <Loader />}

    return (
      <ul className="collection with-header">
        <li className="collection-header"><h4>People checked in</h4></li>
        {renderItems(props.data.checkedIn)}
      </ul>
    ) 
}

export default graphql(query)(CheckedInList)