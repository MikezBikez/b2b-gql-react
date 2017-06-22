import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import query from '../queries/CheckedInList'
import Loader from './Loader'
import {hashHistory} from 'react-router'

class CheckedInList extends Component {
  constructor(props) {
    super(props)

    this.handleCheckout.bind(this)
  }


  handleCheckout (id) {
    hashHistory.push(`/people/${id}/confirmCheckout`)
  }
  
  renderItems () {
    return ( 
      this.props.data.checkedIn.map( ({ id, name, surname}) => {
      return (
        <li key={id} className="collection-item"
          onClick={ () => this.handleCheckout(id) }>
          {name} {surname}
        </li>
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