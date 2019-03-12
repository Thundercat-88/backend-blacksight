import React, {Component} from 'react'
import styled from '@emotion/styled'

const Heading = styled("h1")`
  background-color: ${props => props.bg};
  color: ${props => props.fg};
  text-align: center;
`;

class Profile extends Component { 

    render () {
        return(
            <Heading bg="blue" fg="white">This be the Users!!!!</Heading>
        ) 
    }
}
export default Profile