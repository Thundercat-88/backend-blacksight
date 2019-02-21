import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Auth
import jwt_decode from 'jwt-decode'
import setAuthToken from './Utils/setAuthToken'
import { setCurrentUser } from './Actions/authActions'
// Redux
import { Provider } from 'react-redux'
import store from './store'
//Pages and components
import NavbarLanding from './Components/NavbarLanding'
import LandingPage from './Components/Landing'
import Login from './Components/auth/Login'
import Footer from './Components/Footer'
import Dashboard from '../src/Pages/Dashboard'
import About from '../src/Pages/About'
import Devices from '../src/Pages/Devices'
import Users from '../src/Pages/Users'

// Check for token
if(localStorage.jwttoken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwttoken);
    // Decode token and get user ingo and expiration
    const decoded = jwt_decode(localStorage.jwttoken);
    store.dispatch(setCurrentUser(decoded)); 
}


class App extends Component {
  render() {
    return (  
      <Provider store={store}>
        <Router>
          <div>
            <NavbarLanding />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path='/dash' component={Dashboard} />
            <Route exact path='/devices' component={Devices} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/about' component={About} />
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
