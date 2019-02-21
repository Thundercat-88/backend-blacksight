import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { loginUser } from '../../Actions/authActions'

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

class Login extends React.Component { 
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

componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated) {
        this.props.history.push('/Home')
    }


    if(nextProps.errors) {
        this.setState({errors: nextProps.errors});
    }
}

    onSubmit(e) {
        e.preventDefault();

        const user = {
            userName: this.state.userName,
            password: this.state.password,
        };

        this.props.loginUser(user);

    }

    onChange(e) {
        this.setState({[e.target.userName]: e.target.value });
    }

    render () {
        const { errors } = this.state;

        return(
         <Box>
            <LoginBox onSubmit={this.onSubmit}>
                <Heading fg="black"/>Blacksight Login<Heading/> 
                <div>                    
                <Label></Label>
                <LoginForm
                  type="text"
                  className={classnames('errors', {
                      'is-invalid': errors.userName
                  })}
                  placeholder="Username"
                  name="userName"
                  value={this.state.userName} 
                  onChange={e => this.setState({ userName: e.target.value })}/>                                                                      
                <Label></Label>
                <LoginForm 
                  type="password" 
                  className={classnames('errors', {
                    'is-invalid': errors.password
                })}
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
Login.propTypes = {
        loginUser: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired,
        errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);