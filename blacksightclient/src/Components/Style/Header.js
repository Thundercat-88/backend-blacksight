import React from 'react'
import styled from '@emotion/styled'


const Heading = styled("h1")`
  background-color: ${props => props.bg};
  color: ${props => props.fg};
  text-align: center;
`;

const H1 = props => {
    return (     
      <Heading bg="#008f68" fg="#fae042">{props.label}</Heading>
    )
  }

export default H1