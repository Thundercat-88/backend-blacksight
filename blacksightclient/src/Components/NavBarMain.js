import React, { Component, Fragment } from 'react';
import Navbar from './Components/navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import About from './Pages/About'
import Devices from './Pages/Devices'
import Users from './Pages/Users'
import Login from './Pages/Login'

class NavBarMain extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/dash' component={Dashboard} />
            <Route exact path='/devices' component={Devices} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default NavBarMain;
