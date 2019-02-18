import React, { Component } from 'react'
import NavbarLanding from './Components/NavbarLanding'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './Components/Landing'
import Login from './Components/auth/Login'
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (  
        <Router>
          <div>
        <NavbarLanding />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Footer />
          </div>
        </Router>
    )
  }
}

export default App;
