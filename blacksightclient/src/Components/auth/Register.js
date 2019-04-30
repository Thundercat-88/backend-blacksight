import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../Actions/authActions';
import B1 from '../Style/Button' 
import { Grid, Form } from 'semantic-ui-react'
import TextField from '../common/TextField'

class Register extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <Fragment>
        <Grid centered columns={2}>
            <Grid.Column>
                    <Form onSubmit={this.onSubmit}>
                        <TextField
                                placeholder="Username"
                                name="userName" 
                                label="Username"
                                type="text"
                                icon="user"
                                iconPosition="left"
                                value={this.state.userName}
                                onChange={this.onChange}
                                error={errors.name}/>
                            <TextField
                                placeholder="Email"
                                name="email" 
                                label="Email"
                                type="email"
                                icon="mail"
                                iconPosition="left"
                                value={this.state.email}
                                onChange={this.onChange}
                                error={errors.email}/>
                            <TextField
                                placeholder="Password"
                                name="password" 
                                label="Password"
                                type="password"
                                icon="lock"
                                iconPosition="left"
                                value={this.state.password}
                                onChange={this.onChange}/>
                            <TextField
                                placeholder="Confirm Password"
                                name="password2" 
                                label="Confirm Password"
                                type="password"
                                icon="lock"
                                iconPosition="left"
                                value={this.state.password2}
                                onChange={this.onChange}/>
                        <B1 label='Register' color='blue'/>    
                    </Form>
            </Grid.Column>
        </Grid>
    </Fragment>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
