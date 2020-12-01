import React, { Component } from 'react'
import { Redirect, withRouter } from "react-router-dom";
import TextField from '@material-ui/core/TextField';

class Edit extends Component {
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
        console.log(`This will edit => ${this.props.user.id}`)
        e.preventDefault()
        const {
          first_name,
          last_name,
          email,
          name,
          password,
          bio,
          chicken_lover,
        } = this.state;
    

        fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
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
            }})
        })
        .then(res => res.json())
        .then(updatedUser => 
          this.setState({
            first_name: updatedUser.first_name,
            last_name: updatedUser.last_name,
            email: updatedUser.email,
            name: updatedUser.name,
            password: updatedUser.password,
            bio: updatedUser.bio,
            chicken_lover: updatedUser.chicken_lover,
        }))
    }

    handleDeleteUser = () => {
        console.log(`this works => ${this.props.user.id}`)
        fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}`, {
            method: 'DELETE',
            headers: {
              "Authorization": `Bearer ${localStorage.token}`
            }
        })
        .then(res => res.json())
        .then(() => alert("User successfully deleted"))
    }

    render() {
        const { handleDeleteUser, handleChange, handleSubmit } = this
        const { user } = this.props
        return (
        <div className="edit-user">
        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="inline fields">
            <h3>User Edit Form</h3>
            <label for="first_name">First Name: </label>
            <input
              type="text"
              id="first_name"
              defaultValue={user.first_name}
              name="first_name"
              onChange={handleChange}
            />
            <br />
            <label for="last_name">Last Name: </label>
            <input
              type="text"
              id="Last_name"
              defaultValue={user.last_name}
              name="last_name"
              onChange={handleChange}
            />
            <br />
            <label for="email">Email: </label>
            <input
              type="text"
              id="email"
              defaultValue={user.email}
              name="email"
              onChange={handleChange}
            />
            <br />
            <label for="name">Username: </label>
            <input
              type="text"
              id="name"
              defaultValue={user.name}
              name="name"
              onChange={handleChange}
            />
            <br />
            <label for="password">Password: </label>
            <input
              type="password"
              id="password"
              defaultValue="password"
              name="password"
              onChange={handleChange}
            />
            <br />
            <label for="bio">Current Bio: </label>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              defaultValue={user.bio}
              variant="outlined"
              name="bio"
              onChange={handleChange}
              style={{
                width: 400,
                fontSize: 7,
              }}
            />
            <br />
            <label for="chicken-lover">Chicken Lover Status:</label>
            <br />
            <input
              type="radio"
              value="true"
              id="yes"
              name="chicken-lover"
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
            <button type="submit">Update Profile </button>
          </div>
            <button className="dlt-user" onClick={() => handleDeleteUser(user.id)}>Delete Profile</button>
        </form>
      </div>
        )
    }
}

export default withRouter(Edit)