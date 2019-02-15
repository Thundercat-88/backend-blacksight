import React, {Component} from 'react'
import styled from '@emotion/styled'

const Heading = styled("h1")`
  color: ${props => props.fg};
  text-align: center;
`;
const Box = styled("div")`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    padding-top: 10%;
`

const LoginBox = styled("div")`
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    display: inline-block;
    width: 400px;
    //border: 1px solid black;

    
`
const LoginForm = styled("input")`
  background-color: ${props => props.bg};
  color: ${props => props.fg};
  width: 80%;
  margin: 8px 0;
`;
const Submit = styled("button")`
    text
    width: 20%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    :hover{
        background-color: #45a049;
    }
    :active{
        background-color:SkyBlue;
        color:black;
    }
`
const Label = styled("label")`
padding-right: 10px;
`

class ShowLogin extends React.Component { 
    state = { user: "", pass:""};

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.user,this.state.pass)
    }

    render () {
        return(
         <Box>
            <LoginBox>
                <Heading fg="black"/>Please enter credentials<Heading/> 
                <Label>User</Label>
                <LoginForm 
                  type="text"
                  value={this.setState.user} 
                  onChange={e => this.setState({ user: e.target.value })}/>                                                                      
                <Label>Pass</Label>
                <LoginForm 
                  type="text" 
                  value={this.setState.pass}
                  onChange={e => this.setState({ pass: e.target.value })}/>                 
                <Submit onClick={this.onFormSubmit}>Submit</Submit>
            </LoginBox>  
            </Box>
        )        
    }
}
export default ShowLogin