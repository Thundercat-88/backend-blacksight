import React, { Component, Fragment } from 'react';
import './App.css';
import NavBarMain from './Components/NavBarMain';
import Footer from './Components/Footer';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBarMain />
        <h1>Blacksight App</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
