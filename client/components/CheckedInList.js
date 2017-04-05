import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import query from '../queries/CheckedInList'
import Loader from './Loader'

class CheckedInList extends Component {
  constructor(props) {
    super(props)
  }
  
  renderItems () {
    return ( 
      this.props.data.checkedIn.map( ({ id, name, surname}) => {
      return (
        <li key={id} className="collection-item">{name} {surname}</li>
      )}
    ))
  }
  
  render () {

    if (this.props.data.loading) {return <Loader />}

    return (
      <ul className="collection with-header">
        <li className="collection-header"><h4>These People have Checked In today</h4></li>
        {this.renderItems()}
      </ul>
    ) 
  }
}

export default graphql(query)(CheckedInList)