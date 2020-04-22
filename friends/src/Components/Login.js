import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: {
                username: "",
                password: ""
            }
        }
    }

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    enter = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", this.state.credentials)
        .then(res => {
            localStorage.setItem("token", res.data.payload);
            this.props.history.push("/protected")
        })
        .catch(err => {
            console.log("ERROR", err)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.enter}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChanges}
                        placeholder="username"
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChanges}
                        placeholder="password"
                    />
                    <button type="submit">Log in</button>
                </form>
            </div>
        )
    }
}

export default Login;