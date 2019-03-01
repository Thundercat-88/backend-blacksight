import React, {Component} from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
    
`

const Heading = styled("h1")`
  background-color: ${props => props.bg};
  color: ${props => props.fg};
  text-align: center;
`;


class Dashboard extends Component {

    render() {
        return (
            <Container>
                <Heading bg="slateBlue" fg="hotpink">This be the Dash!!!!</Heading>
            </Container>
        )
    }
}

export default Dashboard