import React from 'react'
import { Button } from 'semantic-ui-react'

const B1 = (props) => (
      <Button inverted color={props.color} onClick={props.onClick}>
        {props.label}
      </Button>  
)

export default B1
