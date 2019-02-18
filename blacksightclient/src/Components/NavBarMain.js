import React, { Component, Fragment } from 'react'
import NavbarContainer from './NavbarContainer.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Dashboard from '../Pages/Dashboard'
import About from '../Pages/About'
import Devices from '../Pages/Devices'
import Users from '../Pages/Users'

class NavBarMain extends Component {
  render() {
    return (
      <Router>
        <Fragment>
         <NavbarContainer />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/dash' component={Dashboard} />
            <Route exact path='/devices' component={Devices} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/about' component={About} />
            <Route exact path='/logout' component={Logout} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default NavBarMain;
