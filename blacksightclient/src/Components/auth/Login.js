import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { loginUser } from '../../Actions/authActions'
import TextField from '../common/TextField.js'

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

componentDidMount() {
    if(this.props.auth.isAuthenticated) {
        this.props.history.push('/dash');
    }
}

componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated) {
        this.props.history.push('/dash')
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
        this.setState({[e.target.name]: e.target.value });
    }

    render () {
        const { errors } = this.state;

        return(
         <Box>
            <LoginBox onSubmit={this.onSubmit}>

                <Heading fg="black"/>Blacksight Login<Heading/>    

                <TextField
                    placeholder="Username"
                    name="userName"
                    label="Username"
                    type="text"
                    value={this.state.userName}
                    onChange={this.onChange}
                    errors={errors.userName}
                />
                <TextField
                    placeholder="Password"
                    name="password"
                    label="Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    errors={errors.password}
                />                             
                <Submit onSubmit={this.onSubmit}>Submit</Submit>           
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