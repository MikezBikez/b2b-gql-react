import React from 'react'
import {graphql} from 'react-apollo'
import query from '../queries/personFetch'
import nextQuery from '../queries/CheckedInList'
import otherQuery from '../queries/notCheckedInList'
import {CheckIn} from '../mutations/CheckInOut'
import Loader from './Loader'
import Avatar from './Avatar'

import { Button, Icon } from 'semantic-ui-react'

const ConfirmCheckin = (props) => {

  const handleCancel = () => props.history.goBack()

  const handleCheckin = (id) => {
    props.mutate({
      variables: {id},
      refetchQueries: [{ query: nextQuery }, { query: otherQuery }]
    })
    .then(props.history.push(`/people/whosIn`))    
  }

  if (props.data.loading) {return <Loader />}

  let { id, name, surname, avatar } = props.data.person

  return (
    <div key={id} className="card">
      <div className="card-content">
        <p>{name} {surname}</p>
      </div>
      <div className="card-action">
        <Button.Group>
          <Button onClick={ () => handleCancel() }>Cancel</Button>
          <Button.Or />
          <Button positive
            onClick={ () => handleCheckin(id) }> Check In
          </Button>
        </Button.Group>
      </div>
    </div>
  ) 

}

export default graphql(query, 
  {
    options: (props) => { return {variables: {id: props.match.params.id} }}
  })
  (graphql(CheckIn)(ConfirmCheckin)
)