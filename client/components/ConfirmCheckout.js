import React from 'react'
import {graphql} from 'react-apollo'
import query from '../queries/personFetch'
import nextQuery from '../queries/CheckedInList'
import otherQuery from '../queries/notCheckedInList'
import {CheckOut} from '../mutations/CheckInOut'
import Loader from './Loader'

const ConfirmCheckout = (props) => {

const handleCheckout = (id) => {
  props.mutate({
    variables: {id},
    refetchQueries: [{ query: nextQuery }, { query: otherQuery }]
  })
  .then(props.history.push(`/people/whosIn`))
}

const handleCancel = () => props.history.goBack()

  if (props.data.loading) {return <Loader />}

  let { id, name, surname, avatar } = props.data.person

  return (
    <div key={id} className="card">
      <div className="card-content">
        <p>{name} {surname}</p>
      </div>
      <div className="card-action">
        <a onClick={ () => handleCancel() } className="waves-effect waves-light btn-flat">cancel</a>
        <a onClick={ () => handleCheckout(id) } className="waves-effect waves-light btn">check out</a>
      </div>
    </div>
  ) 
}

export default graphql(query, 
  {
    options: (props) => { return {variables: {id: props.match.params.id} }}
  })
  (graphql(CheckOut)(ConfirmCheckout)
)