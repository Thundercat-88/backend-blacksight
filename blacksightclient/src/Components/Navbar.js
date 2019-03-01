import React from 'react'
import NavItem from './navlink'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../Actions/authActions'
// eslint-disable-next-line
import marquee from './marquee.css'

const Navcontainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    list-style-type: none;
    height:48px;
    overflow: hidden;
    background-color: #333;
    width: 100%;
  `
const Icon = styled.li`
    float: left;
    border-right:1px solid #bbb;
    height:48px;
`
const Login = styled.li`
    color: white;
    float: right;
    text-align: center;
    font-size:16pt;
    border-left:1px solid #bbb;
    background-color: SeaGreen;
`
const Logout = styled.li`
    color: white;
    float: right;
    text-align: center;
    font-size:16pt;
    border-left:1px solid #bbb;
    background-color: #FF0000;
`
const Scroll = styled.li`
    color: white;
    float: right;
    margin-right: 10px;
`

class Navbar extends React.Component {
    onLogoutCLick(e) {
        e.preventDefault();
        this.props.logoutUser();
    }

render(){
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
        <div>    
        <NavItem travel='/dash' label='Dash'/>
        <NavItem travel='/devices' label='Devices' />
        <NavItem travel='/users' label='Users' />
        <NavItem travel='/about' label='About' />
        <Logout onClick={this.onLogoutCLick.bind(this)}><NavItem travel='/' label='Logout' /></Logout>
        <Scroll><p class='marquee'>INSERT AWESOME BANNER MESSAGE HERE PLZ</p></Scroll> 
        </div>      
    );

    const guestLinks = ( 
        <div>
        <Login><NavItem travel='/login' label='Login'/></Login>      
        </div>
    );

        return (
            <Navcontainer>    
                <Icon><img src={"./favicon.ico"} alt={"Icon"} style={{ width: 50, height: 45 }} /></Icon>
                {isAuthenticated ? authLinks : guestLinks}                               
            </Navcontainer>           
        );
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth:state.auth
})

export default connect(mapStateToProps, { logoutUser })(Navbar);
