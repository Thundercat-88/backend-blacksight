import React, {Component} from 'react'
import styled from '@emotion/styled'

const Heading = styled("h1")`
  background-color: ${props => props.bg};
  color: ${props => props.fg};
  text-align: center;
`;


class Dashboard extends Component {

    render() {
        return (
            <Heading bg="slateBlue" fg="hotpink">This be the Dash!!!!</Heading>
        )
    }
}

export default Dashboard