import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import query from '../queries/PeopleList'
import Loader from './Loader'

class PeopleList extends Component {
  constructor(props) {
    super(props)
  }
  
  renderItems () {
    return ( 
      this.props.data.people.map( ({ id, name, surname}) => {
      return (
        <li key={id} className="collection-item">{name} {surname}</li>
      )}
    ))
  }
  
  render () {

    if (this.props.data.loading) {return <Loader />}

    return (
      <ul className="collection with-header">
        <li className="collection-header"><h4>The Back to Bikes Gang</h4></li>
        {this.renderItems()}
      </ul>
    ) 
  }
}

export default graphql(query)(PeopleList)