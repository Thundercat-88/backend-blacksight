import React from 'react'
import NavItem from './navlink'
import styled from '@emotion/styled'


const Navcontainer = styled.div`
    //position: fixed;
    //top: 0;
    //left: 0;
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
class NavbarLanding extends React.Component {
render(){
        return (
            <Navcontainer>
                <Icon><img src={"./favicon.ico"} alt={"Icon"} style={{ width: 50, height: 45 }} /></Icon>
              
                <Login><NavItem travel='/login' label='Login'/></Login>              
            </Navcontainer>           
        );
    }
}
export default NavbarLanding;
