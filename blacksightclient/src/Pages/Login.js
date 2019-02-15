import React, {Component} from 'react'
import ShowLogin from '../Components/LoginBox';

class Login extends React.Component {
    onLoginSubmit(user,pass) {
        console.log(user,pass);
    }

    render() {
        return (
            <div>
                <ShowLogin onSubmit={this.onLoginSubmit} />
            </div>
        )
    }
}

export default Login