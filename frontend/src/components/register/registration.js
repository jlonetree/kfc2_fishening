import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
      img_url: "",
      chicken_lover: false,
      total_points: 0,
      created: false
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = (e) => {
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
      img_url,
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
        "img_url": img_url,
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
        this.props.history.push('/login')
      });
  };

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    const { handleChange, handleSubmit } = this;
    return (
      <div className="registration">
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="inline fields">
            <h3>Registration Form</h3>
            <label htmlFor="first_name"><p>First Name</p></label>
            <input
              type="text"
              id="first_name"
              placeholder="first name"
              name="first_name"
              onChange={handleChange}
            />
            <br /><br />
            <label htmlFor="last_name"><p>Last Name</p></label>
            <input
              type="text"
              id="Last_name"
              placeholder="last name"
              name="last_name"
              onChange={handleChange}
            />
            <br /><br />
            <label htmlFor="email"><p>Email</p></label>
            <input
              type="text"
              id="email"
              placeholder="email"
              name="email"
              onChange={handleChange}
            />
            <br /><br />
            <label htmlFor="name"><p>Username</p></label>
            <input
              type="text"
              id="name"
              placeholder="username"
              name="name"
              onChange={handleChange}
            />
            <br /><br />
            <label htmlFor="password"><p>Password</p></label>
            <input
              type="password"
              id="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            <br /><br />
            <label htmlFor="img_url"><p>Image Url</p></label>
            <input
              type="text"
              id="img_url"
              placeholder="image address"
              name="img_url"
              onChange={handleChange}
            />
            <br /><br />
            <label htmlFor="bio"><p>Bio</p></label>
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
            <br /><br />
            <label htmlFor="chicken_lover">Are You a Chicken Lover?</label>
            <br /><br />
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
            <br />
            <br />
            <a href="/login">Login</a>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Registration);
