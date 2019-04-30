import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { loginUser } from '../../Actions/authActions'
import TextField from '../common/TextField.js'
import { Form } from 'semantic-ui-react'

const Container = styled("div")`
    width: 50%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    padding-top:50px;
    padding-bottom:50px;
`
const LoginBox = styled("form")`
    border-radius: 10px;
    background-color: yellow;
    padding: 20px;
`
const Submit = styled("button")`
    background-color: #4CAF50;
    color: white;
    padding: 14px 40px;
    margin: 8px 0;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    :hover{
        background-color: #45a049;
    }
    :active{
        background-color:SkyBlue;
        color:black;
    }
    :disabled{ 
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
        <Container>
            <LoginBox onSubmit={this.onSubmit}>
                <Form.Group widths='equal'> 
                    <TextField
                        placeholder="Username"
                        name="userName"
                        label="Username"
                        type="text"
                        value={this.state.userName}
                        onChange={this.onChange}
                        error={errors.userName}
                    />
                    <TextField
                        placeholder="Password"
                        name="password"
                        label="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        error={errors.password}
                    />                       
                    </Form.Group>      
                    <Submit>Submit</Submit>           
            </LoginBox>  
        </Container>
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