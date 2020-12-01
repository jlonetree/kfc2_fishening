import React, { Component } from 'react'
import { Redirect, withRouter } from "react-router-dom";

const url = "http://localhost:3000/api/v1/login"

class Login extends Component {

    constructor(){
        super()
        this.state = {
            name: "",
            password: "",
            loggedIn: false,
            currentUser: "",
            errorMessage: ""
        }
    }

    handleChange = (e) => {
        console.log( e.target.name, e.target.value )
        this.setState({ [e.target.name]: e.target.value })
    }

    handleLogin = (e) => {
        e.preventDefault()
        e.target.reset()

        const {name, password} = this.state

        const user = {name, password}

        fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user})
        })
        .then(res => res.json())
        .then(response => {
            console.log(response)
            if(response.message){
                return this.setState({errorMessage: response.message})
            }
            localStorage.setItem("token", response.jwt)
            this.props.setCurrentUser(response.user)
            this.props.history.push('/profile');
        })
    }

    greeting = (message) => {
            return <h3>{message}</h3>
    }

    render() {
        const {handleLogin, handleChange} = this
        return (
            <div className="login">
                <form className="login-form" onSubmit={handleLogin}>
                    <div className="inline fields">
                        <h3>Finger-Lickin' Log-In</h3>
                        <label for="name">Username: </label>
                        <input type="text" id="username" placeholder="username" name="name" onChange={handleChange} />
                        <br />
                        <label for="password">Password: </label>
                        <input type="password" id="password" placeholder="password" name="password" onChange={handleChange} />
                        <br />
                        <button type="submit">Log-In</button><br /><br />
                        <a href="/registration">First Time?</a>
                    </div>
                </form>
                {this.state.errorMessage !== "" ? <h3>{this.state.errorMessage}</h3> : null}
            </div>
        )
    }
}

export default withRouter(Login)