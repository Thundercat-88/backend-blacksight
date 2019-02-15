import React, { Component } from 'react';
import NavbarLanding from './Components/NavbarLanding';
import LandingPage from './Components/Landing'
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div> 
        <NavbarLanding />
        <LandingPage />
        <Footer />
      </div>
    );
  }
}

export default App;
