import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import query from '../queries/notCheckedInList'
import Loader from './Loader'
import {hashHistory} from 'react-router'

class CheckIn extends Component {
  constructor(props) {
    super(props)

    this.handleCheckin.bind(this)
  }

  handleCheckin (id) {
    hashHistory.push(`/people/${id}/confirmCheckin`)
  }
  
  renderItems () {
    return ( 
      this.props.data.notCheckedIn.map( ({ id, name, surname}) => {
      return (
        <li 
          key={id} 
          className="collection-item"
          onClick={ () => this.handleCheckin(id) }
        >
          {name} {surname}
        </li>
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