import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import query from '../queries/notCheckedInList'
import Loader from './Loader'

class CheckIn extends Component {
  constructor(props) {
    super(props)
  }
  
  renderItems () {
    return ( 
      this.props.data.notCheckedIn.map( ({ id, name, surname}) => {
      return (
        <li key={id} className="collection-item">{name} {surname}</li>
      )}
    ))
  }
  
  render () {

    if (this.props.data.loading) {return <Loader />}

    return (
      <ul className="collection with-header">
        <li className="collection-header"><h4>Ready for Check In</h4></li>
        {this.renderItems()}
      </ul>
    ) 
  }
}

export default graphql(query)(CheckIn)