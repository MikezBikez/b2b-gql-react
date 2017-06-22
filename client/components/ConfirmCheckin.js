import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import query from '../queries/personFetch'
import nextQuery from '../queries/CheckedInList'
import otherQuery from '../queries/notCheckedInList'
import mutation from '../mutations/CheckIn'
import Loader from './Loader'
import Avatar from './Avatar'

import {hashHistory} from 'react-router'

import { Button, Icon } from 'semantic-ui-react'

class ConfirmCheckin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: []
    }
  }

  handleCheckin (id) {
    this.props.mutate({
      variables: {id},
      refetchQueries: [{ query: nextQuery }, { query: otherQuery }]
    })
    .then(hashHistory.push(`/people/whosIn`))
  }

  handleCancel () {
    hashHistory.goBack()
  }
   
  render () {

    if (this.props.data.loading) {return <Loader />}

    let { id, name, surname, avatar } = this.props.data.person

    return (
      <div key={id} className="card">
        <div className="card-content">
          <p>{name} {surname}</p>
        </div>
        <div className="card-action">
          <Button.Group>
            <Button onClick={ () => this.handleCancel() }>Cancel</Button>
            <Button.Or />
            <Button positive
              onClick={ () => this.handleCheckin(id) }> Check In
            </Button>
          </Button.Group>
        </div>
      </div>
    ) 
  }
}

export default graphql(query, 
  {
    options: (props) => { return {variables: {id: props.params.id} }}
  })
  (graphql(mutation)(ConfirmCheckin)
)