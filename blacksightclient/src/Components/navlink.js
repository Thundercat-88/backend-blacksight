import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'


const Link = styled(NavLink)`
  text-decoration:none;
  color:white;
  font-size:16pt;
`
const Mi = styled.li`
    width: 100px;
    height:48px;
    float: left;
    border-right:1px solid #bbb;
    text-align: center;
    padding: 10px;
    :hover{
        background-color:black;
    }
    :active{
        background-color:SkyBlue;
        color:black;
    }
`

const Navitem = props => {
  return (     
    <Link to={props.travel}><Mi>{props.label}</Mi></Link>   
  )
}

export default Navitem
