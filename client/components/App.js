import React, {Component} from 'react'

export default class App extends Component {
  render () {
    return (
      <div className={"container"}>
      The App
      {this.props.children}
      </div>
    )
  }
}