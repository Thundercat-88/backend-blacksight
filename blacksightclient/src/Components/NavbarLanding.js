import React, { Component, Fragment } from 'react'
import NavbarContainerLanding from './NavbarContainerLanding.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class NavbarLanding extends Component {
  render() {
    return (
      <Router>
        <Fragment>
         <NavbarContainerLanding />
          <Switch>
            <Route exact path='/login' />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default NavbarLanding;
