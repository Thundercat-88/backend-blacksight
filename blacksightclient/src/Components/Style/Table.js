import React from 'react'
import { Table, Container } from 'semantic-ui-react'

const colors = [
  'grey'
]
const T1 = props => (
<Container>
    {colors.map(color => (
      <Table color={color} key={color} inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Device Name</Table.HeaderCell>
            <Table.HeaderCell>IP Address</Table.HeaderCell>
            <Table.HeaderCell>MAC Address</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{props.host}</Table.Cell>
            <Table.Cell>{props.ip}</Table.Cell>
            <Table.Cell>{props.mac}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    ))}
  </Container>
)

export default T1
