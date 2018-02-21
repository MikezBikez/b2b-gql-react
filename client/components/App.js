import React, {Component} from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import Header from './Header'
import PeopleList from './PeopleList'
import CheckedInList from './CheckedInList'
import CheckIn from './CheckIn'
import ConfirmCheckin from './ConfirmCheckin'
import ConfirmCheckout from './ConfirmCheckout'

class App extends Component {
  render () {
    return (
      <div className={"container"}>
        <Route path='*' component={Header}/>
        <div>
          <Switch>
            <Route path='/people/list' component={PeopleList}/>
            <Route path='/people/whosIn' component={CheckedInList}/>
            <Route path='/people/checkIn' component={CheckIn}/>
            <Route path='/people/:id/confirmCheckin' component={ConfirmCheckin}/>
            <Route path='/people/:id/confirmCheckout' component={ConfirmCheckout}/>
          </Switch>
        </div>
      </div>
    )
  }
}
export default withRouter(App)