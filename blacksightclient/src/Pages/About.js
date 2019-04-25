import React, { Component } from 'react'
import '../App.css';
import H1 from '../Components/Style/Header'
import P1 from '../Components/Style/Paragraph'

class About extends Component {

    render() {
        return (   
            <div>
                <H1 label='About Blacksight'/>
                <P1 header='The Aim' text='
                With the growing issue of cyber threats, companies are missing what is going on within 
                their own walls. The need for Insider threat detection systems to combat the threat from 
                malicious employees is greater than ever. This system will also double as an intrusion 
                detection system.
                The aim of the project is to design and develop a tool to monitor a corporate network and display results 
                in real time. This system would also track user behavior and use algorithms to determine whether a 
                specific user was performing an activity, that could be deemed abnormal. The project will be hardware 
                based and live on a Raspberry Pi, then plugged into a network to monitor activity. It will be developed as a 
                product with minimal setup and no need for extra hardware'/>            
            </div>
        )
    }
}
export default About