import React from 'react'
import { Table, Container } from 'semantic-ui-react'

const colors = [
  'grey'
]
const T1 = () => (
<Container>
    {colors.map(color => (
      <Table color={color} key={color} inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>IP Address</Table.HeaderCell>
            <Table.HeaderCell>MAC Address</Table.HeaderCell>
            <Table.HeaderCell>Device Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>192.168.0.1</Table.Cell>
            <Table.Cell>hb:72:j3:yg:82</Table.Cell>
            <Table.Cell>PC1</Table.Cell>
          </Table.Row>
         
          

        </Table.Body>
      </Table>
    ))}
  </Container>
)

export default T1
