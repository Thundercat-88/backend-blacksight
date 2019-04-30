import React from 'react'
import { Table, Container } from 'semantic-ui-react'

const colors = [
  'blue'
]
const UserTable = props => (
<Container>
    {colors.map(color => (
      <Table color={color} key={color} inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Device Name</Table.HeaderCell>
            <Table.HeaderCell>Current User</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{props.name}</Table.Cell>
            <Table.Cell>{props.user}</Table.Cell>
            <Table.Cell>{props.status}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    ))}
  </Container>
)

export default UserTable
