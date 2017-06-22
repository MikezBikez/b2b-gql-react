import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './components/App'

// setting up routes this way allows webpack 2 to code split react-router v3.x
// NOTE: THe process is very different in react-router v4.x hence staying with v3.x

const componentRoutes = {
  component: App,
  path: '/',
  childRoutes: [
    {  
      path: '/child',
      getComponent(location, cb) {
        System.import('./components/child/Hello')
          .then(module => cb(null, module.default) )
      },
    },
    {  
      path: 'people/list',
      getComponent(location, cb) {
        System.import('./components/PeopleList')
          .then(module => cb(null, module.default) )
      },
    },
    {  
      path: 'people/whosIn',
      getComponent(location, cb) {
        System.import('./components/CheckedInList')
          .then(module => cb(null, module.default) )
      },
    },
    {  
      path: 'people/checkIn',
      getComponent(location, cb) {
        System.import('./components/CheckIn')
          .then(module => cb(null, module.default) )
      },
    },
    {  
      path: 'people/:id/confirmCheckin',
      getComponent(location, cb) {
        System.import('./components/ConfirmCheckin')
          .then(module => cb(null, module.default) )
      },
    },
    {  
      path: 'people/:id/confirmCheckout',
      getComponent(location, cb) {
        System.import('./components/ConfirmCheckout')
          .then(module => cb(null, module.default) )
      },
    }
  ]
}

const Routes = () => {
  return (
    <Router history={hashHistory} routes={componentRoutes} />
  )
}

export default Routes