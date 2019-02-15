import React from 'react'
import NavItem from './navlink';
import styled from '@emotion/styled'
import marquee from './marquee.css'

const Navcontainer = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    height:48px;
    overflow: hidden;
    background-color: #333;
  `
const Icon = styled.li`
    float: left;
    border-right:1px solid #bbb;
    height:48px;
    //width: 100px;
`
const Login = styled.li`
    color: white;
    float: right;
    text-align: center;
    font-size:16pt;
    border-left:1px solid #bbb;
    background-color: SeaGreen;
`
const Scroll = styled.li`
    color: white;
    float: right;
    margin-right: 10px;
`

class Navbar extends React.Component {
render(){
        return (
            <Navcontainer>
                <Icon><img src={"./favicon.ico"} alt={"Icon"} style={{ width: 50, height: 45 }} /></Icon>
                <NavItem travel='/' label='Home' />
                <NavItem travel='/dash' label='Dashboard' />
                <NavItem travel='/devices' label='Devices' />
                <NavItem travel='/users' label='Users' />
                <NavItem travel='/about' label='About' />

                <Login><NavItem travel='/login' label='Login'/></Login>
                <Scroll><p class='marquee'>INSERT AWESOME BANNER MESSAGE HERE PLZ</p></Scroll>               
            </Navcontainer>           
        );
    }}

export default Navbar
