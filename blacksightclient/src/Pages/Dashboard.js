import React, {Component} from 'react'
import H1 from '../Components/Style/Header'
import G1 from '../Components/Style/DashGrid'

class Dashboard extends Component {

    render() {
        return (        
            <div>
                <H1 label='Dashboard'/>
                <G1/>
            </div>
          
        )
    }
}

export default Dashboard