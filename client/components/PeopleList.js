import React from 'react'
import {graphql} from 'react-apollo'
import query from '../queries/PeopleList'
import Loader from './Loader'

const PeopleList = (props) => {

  const renderItems = (people) =>
    people.map( ({ id, name, surname}) => 
      <li key={id} className="collection-item">{name} {surname}</li> )

  if (props.data.loading) {return <Loader />}

  return (
    <ul className="collection with-header">
      <li className="collection-header"><h4>The Back to Bikes Gang</h4></li>
      {renderItems(props.data.people)}
    </ul>
  ) 

}

export default graphql(query)(PeopleList)