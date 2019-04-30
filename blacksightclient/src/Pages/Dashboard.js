import React, {Component} from 'react'
import H1 from '../Components/Style/Header'
//import G1 from '../Components/Style/DashGrid'
import { Container, Grid } from 'semantic-ui-react'
import axios from 'axios'
import T1 from '../Components/Style/Table'
import ScanTable from '../Components/Style/scanTable'
import UserTable from '../Components/Style/userTable'
import B1 from'../Components/Style/Button'

class Dashboard extends Component {
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
        <div key={net.id}>{net.host_ip}</div>
        );
        const host = this.state.networkData.map((net) =>
        <div key={net.id}>{net.host_name}</div>
        );
        const mac = this.state.networkData.map((net) =>
        <div key={net.id}>{net.mac}</div>
        );
        return (        
            <div>
                <H1 label='Dashboard'/>
                <Container>
                    <style>{`
                    p {
                        align-content: center;
                        //background-color: #495285;
                        color: #fff;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        //min-height: 2em;
                        padding-top: 100px;
                    }
                    p > span {
                        opacity: 0.4;
                        text-align: center;
                    }
                    }
                    `}
                    </style>

                    <Grid celled columns={3}>
                    <Grid.Row>
                        <Grid.Column>
                        <T1 host={host} ip={ip} mac={mac}/>
                        </Grid.Column>
                        <Grid.Column>
                        <B1 label='Start Scan' color='green'/>
                        <B1 label='Stop Scan' color='red' />
                        <B1 label='Reset Scan' color='yellow' />    
                        </Grid.Column>
                        <Grid.Column>
                        <ScanTable/> 
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                        <UserTable/>
                        </Grid.Column>
                        <Grid.Column>
                        <p>DASH 5</p>
                        </Grid.Column>
                        <Grid.Column>
                        <p>DASH 6</p>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                    </Container>
            </div>
          
        )
    }
}

export default Dashboard