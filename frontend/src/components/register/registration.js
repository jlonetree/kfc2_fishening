import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import TextField from '@material-ui/core/TextField';

const url = "http://localhost:3000/api/v1/users";

class Registration extends Component {
  constructor() {
    super();

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      name: "",
      password: "",
      bio: "",
      chicken_lover: false,
      total_points: 0,
      created: false
    };
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = (e) => {
    console.log(`this is working ${this.state.chicken_lover}`);
    this.setState({
      chicken_lover: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      email,
      name,
      password,
      bio,
      chicken_lover,
    } = this.state;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "name": name,
        "password": password,
        "bio": bio,
        "chicken_lover": chicken_lover,
        "total_points": 0,
      }}),
    })
      .then((res) => res.json())
      .then((newUser) => {
        this.props.addUser(newUser)
        if (newUser.status === "created") {
          this.setState({created: true})
        }
      });
  };

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    const { handleChange, handleSubmit } = this;
    return (
      <div className="register">
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="inline fields">
            <h3>Registration Form</h3>
            <label for="first_name">First Name: </label>
            <input
              type="text"
              id="first_name"
              placeholder="first name"
              name="first_name"
              onChange={handleChange}
            />
            <br />
            <label for="last_name">Last Name: </label>
            <input
              type="text"
              id="Last_name"
              placeholder="last name"
              name="last_name"
              onChange={handleChange}
            />
            <br />
            <label for="email">Email: </label>
            <input
              type="text"
              id="email"
              placeholder="email"
              name="email"
              onChange={handleChange}
            />
            <br />
            <label for="name">Username: </label>
            <input
              type="text"
              id="name"
              placeholder="username"
              name="name"
              onChange={handleChange}
            />
            <br />
            <label for="password">Password: </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            <br />
            <label for="bio">Tell Us A Bit About You </label>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              placeholder="Tell us about yourself"
              variant="outlined"
              name="bio"
              onChange={handleChange}
              style={{
                width: 400,
                fontSize: 7,
              }}
            />
            <br />
            <label for="chicken_lover">Are You a Chicken Lover?</label>
            <br />
            <input
              type="radio"
              value="true"
              id="yes"
              name="chicken_lover"
              onChange={handleChange}
            />{" "}
            Yes
            <input
              type="radio"
              value="false"
              id="no"
              name="chicken_lover"
              onChange={handleChange}
            />{" "}
            No
            <br />
            <br />
            <button type="submit">
              Register Account
            </button>
            <h5>If you already have an account</h5>
            <a href="/login">Click Here</a>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Registration);
