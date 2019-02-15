import React, { Component } from 'react'
import styled from '@emotion/styled'
//import { PythonShell } from 'python-shell';
//let pyshell = new PythonShell('./pythonScripts/getIP.py');

const Heading = styled("h1")`
  background-color: ${props => props.bg};
  color: ${props => props.fg};
  text-align: center;
`;

//pyshell.on('message', function (message) {
  //  console.log(message);
  //}); 


class Devices extends Component {
    render() {
        return (
            <body>
                <Heading bg="#008f68" fg="#fae042">This be the Device section!!!!!!!</Heading>
                <h1>{}</h1>
            </body>
        )
    }
}

export default Devices
