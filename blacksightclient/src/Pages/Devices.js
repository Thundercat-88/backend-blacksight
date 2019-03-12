import React, { Component } from 'react'
import styled from '@emotion/styled'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
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

                <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>IP Address</Table.HeaderCell>
        <Table.HeaderCell>MAC Address</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>First</Label>
        </Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>









            </body>
        )
    }
}

export default Devices
