import React, { Component } from 'react'
import styled from '@emotion/styled'

const FooterBox = styled.div`
    height:48px;
    background-color: #333;
    color: white;
    text-align: center;
    font-size:16pt;
    //position: fixed;
    //left: 0;
    //bottom: 0;
    width: 100%;
  `

class Footer extends Component {
  render() {
    return (
        <FooterBox>
             Copyright &copy; {new Date().getFullYear()} DFA
        </FooterBox>
    )
  }
}

export default Footer;

