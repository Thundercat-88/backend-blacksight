import React from 'react'
import { Container, Header } from 'semantic-ui-react'


const P1 = props => {
    return (     
        <Container text>  
         <Header as='h2'>{props.header}</Header>
            <p>{props.text}</p>
        </Container>
    )
  }

export default P1
