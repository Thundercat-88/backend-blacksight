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
    background-color: #000;
    padding-top:50px;
    padding-bottom:50px;
`

const LoginBox = styled("form")`
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 50px;
    display: inline-block;
    width: 400px;
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
    constructor(){
        super();
        this.state = {
            userName:'',
            password:'',
            errors: {}
        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            userName: this.state.userName,
            password: this.state.password,
        };

        console.log(user);
    }

    onChange(e) {
        this.setState({[e.target.userName]: e.target.value });
    }

    render () {
        return(
         <Box>
            <LoginBox onSubmit={this.onSubmit}>
                <Heading fg="black"/>Blacksight Login<Heading/> 
                <div>                    
                <Label></Label>
                <LoginForm 
                  type="text"
                  placeholder="Username"
                  name="userName"
                  value={this.state.userName} 
                  onChange={e => this.setState({ userName: e.target.value })}/>                                                                      
                <Label></Label>
                <LoginForm 
                  type="password" 
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}/>                 
                <Submit onSubmit={this.onSubmit}>Submit</Submit>
                  </div>
            </LoginBox>  
            </Box>
        )        
    }
}

export default ShowLogin;