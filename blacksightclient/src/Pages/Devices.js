import React, { Component } from 'react'
import T1 from '../Components/Style/Table'
import H1 from '../Components/Style/Header'
import B1 from'../Components/Style/Button'
import { Container, Segment } from 'semantic-ui-react'
import axios from 'axios'


class Devices extends Component {

    state = {
        networkData: []
    }

    getNetworkData = () => {
        axios.get('/api/networkData')
        .then(response => {
            this.setState({networkData: response.data})
        })
    }

    componentDidMount() {
        this.getNetworkData()
    }

    render() {
        return (
            <div>
                <H1 label='Devices'/>        
                <Container>
                <Segment inverted>
                <B1 onClick={this.getNetworkData} label='Start Scan' color='green'/>
                <B1 label='Stop Scan' color='red' />
                <B1 label='Reset Scan' color='yellow' />
                </Segment>
                </Container>
                <T1/>
            </div>
        )
    }
}

export default Devices
