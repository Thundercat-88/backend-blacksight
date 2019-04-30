import React from 'react'
import { Table, Container } from 'semantic-ui-react'

const colors = [
  'grey'
]
const ScanTable = props => (
<Container>
    {colors.map(color => (
      <Table color={color} key={color} inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>IP Address</Table.HeaderCell>
            <Table.HeaderCell>Port</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{props.ip}</Table.Cell>
            <Table.Cell>{props.port}</Table.Cell>
            <Table.Cell>{props.status}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    ))}
  </Container>
)

export default ScanTable
