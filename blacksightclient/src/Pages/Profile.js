import React, {Component} from 'react'
import H1 from '../Components/Style/Header'
import T1 from '../Components/Style/Table'
import { Container, Table } from 'semantic-ui-react'
import axios from 'axios'

class Profile extends Component { 
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

    render () {
        const ip = this.state.networkData.map((net) =>
        <Table.Cell key={net.id}>{net.host_ip}</Table.Cell>
        );
        const host = this.state.networkData.map((net) =>
        <Table.Cell key={net.id}>{net.host_name}</Table.Cell>
        );
        const mac = this.state.networkData.map((net) =>
        <Table.Cell key={net.id}>{net.mac}</Table.Cell>
        );
        return(
            <div>
            <H1 label='User Profile'/>
            <Container>
                <T1 host={host} ip={ip} mac={mac}/>
            </Container>
            </div>
        ) 
    }
}
export default Profile