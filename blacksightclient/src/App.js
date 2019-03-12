import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from '@emotion/styled'
// Auth
import jwt_decode from 'jwt-decode'
import setAuthToken from './Utils/setAuthToken'
import { setCurrentUser, logoutUser } from './Actions/authActions'
// Redux
import { Provider } from 'react-redux'
import store from './store'
// Private routes
import PrivateRoute from './Components/common/PrivateRoute.js'
// Pages and components
import Navbar from './Components/Navbar'
import LandingPage from './Components/Landing'
import Login from './Components/auth/Login'
import Footer from './Components/Footer'
import Dashboard from '../src/Pages/Dashboard'
import About from '../src/Pages/About'
import Devices from '../src/Pages/Devices'
import Profile from './Pages/Profile'

// Check for token
if(localStorage.jwttoken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwttoken);
    // Decode token and get user ingo and expiration
    const decoded = jwt_decode(localStorage.jwttoken);
    store.dispatch(setCurrentUser(decoded)); 
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Clear current profile
      // Redirect to login
      window.location.href = '/login';
    }
}
const AppContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(130,150,150,0.8);
  `
const PageContainer = styled.div`
    padding-top: 48px;
    padding-bottom: 48px;
    //overflow-y: scroll;
    
`
class App extends Component {
  render() {
    return (  
      <Provider store={store}>
        <Router>
          <AppContainer>
            <Navbar />
              <PageContainer>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={Login} />
                  <Switch>
                    <PrivateRoute exact path='/dash' component={Dashboard} />
                    <PrivateRoute exact path='/devices' component={Devices} />
                    <PrivateRoute exact path='/profile' component={Profile} />
                    <PrivateRoute exact path='/about' component={About} />
                </Switch>
              </PageContainer>
            <Footer />
          </AppContainer>
        </Router>
      </Provider>
    )
  }
}

export default App;
