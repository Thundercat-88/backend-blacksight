import React, { Component } from 'react'
//import styled from '@emotion/styled'
import './Landing.css'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

class LandingPage extends Component {
  
  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
        this.props.history.push('/dashboard');
    }
}
  render() {
    return (   
        <div className='landingImage'>   
          <div className="dark-overlay landing-inner text-light">       
  
          </div>
        </div>
    )
  }
}

LandingPage.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(LandingPage);
