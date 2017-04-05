import React, {Component} from 'react'
import { hashHistory } from 'react-router'

export default class Header extends Component {

  onWhosIn () {
    hashHistory.push('/people/whosIn')
  }

  onCheckin () {
    hashHistory.push('/people/checkIn')
  }

  onPeopleList () {
    hashHistory.push('/people/list')
  }

  render () {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Back to Bikes</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a onClick={this.onWhosIn}>Who's In Today</a></li>
            <li><a onClick={this.onCheckin}>Check In</a></li>
            <li><a onClick={this.onPeopleList}>The Gang</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}