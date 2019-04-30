import React, { Component } from 'react'
import T1 from '../Components/Style/Table'
import ScanTable from '../Components/Style/scanTable'
import UserTable from '../Components/Style/userTable'
import H1 from '../Components/Style/Header'
import B1 from'../Components/Style/Button'
import { Container, Segment, Table } from 'semantic-ui-react'
import axios from 'axios'


class Devices extends Component {
   
    state = {
        networkData: []
    }


    getNetworkData = () => {
        axios.get('/api/networkData')
        .then(response => {
            this.setState({networkData: response.data})
            console.log(this.state.networkData)
        })
    }

    componentDidMount() {
        this.getNetworkData()
        
    }
    render() {

        const ip = this.state.networkData.map((net) =>
        <Table.Cell key={net.id}>{net.host_ip}</Table.Cell>
        );
        const host = this.state.networkData.map((net) =>
        <Table.Cell key={net.id}>{net.host_name}</Table.Cell>
        );
        const mac = this.state.networkData.map((net) =>
        <Table.Cell key={net.id}>{net.mac}</Table.Cell>
        );

        return (
            <div>
                <H1 label='Devices'/>        
                <Container>
                <Segment inverted>
                <B1 label='Start Scan' color='green'/>
                <B1 label='Stop Scan' color='red' />
                <B1 label='Reset Scan' color='yellow' />
                </Segment>
                <T1 host={host} ip={ip} mac={mac}/>
                <ScanTable/>
                <UserTable/>
                </Container>
            </div>
        )
    }
}

export default Devices
