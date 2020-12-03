import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
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
            img_url: "",
            bio: "",
            chicken_lover: false,
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
        e.preventDefault()
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
              "img_url": img_url,
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
            img_url: updatedUser.img_url,
            bio: updatedUser.bio,
            chicken_lover: updatedUser.chicken_lover,
        }))
    }

    handleDeleteUser = () => {
        fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}`, {
            method: 'DELETE',
            headers: {
              "Authorization": `Bearer ${localStorage.token}`
            }
        })
        .then(res => res.json())
        .then(() => {
          this.props.removeUser(this.props.user)
          alert("User successfully deleted")
          this.props.history.push('/login')
        })
    }

    render() {
        const { handleDeleteUser, handleChange, handleSubmit } = this
        const { user } = this.props
        return (
        <div className="edit">
        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="inline fields">
            <h3>User Edit Form</h3>
            <label htmlFor="first_name">First Name</label>
            <br />
            <input
              type="text"
              id="first_name"
              defaultValue={user?.first_name}
              name="first_name"
              onChange={handleChange}
            />
            <br /><br />
            <label htmlFor="last_name">Last Name</label>
            <br />
            <input
              type="text"
              id="Last_name"
              defaultValue={user?.last_name}
              name="last_name"
              onChange={handleChange}
            />
            <br /><br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              id="email"
              defaultValue={user?.email}
              name="email"
              onChange={handleChange}
            />
            <br /><br />
            <label htmlFor="name">Username</label>
            <br />
            <input
              type="text"
              id="name"
              defaultValue={user?.name}
              name="name"
              onChange={handleChange}
            />
            <br /><br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              defaultValue="password"
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
            <label htmlFor="bio">Bio</label>
            <br />
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              defaultValue={user?.bio}
              variant="outlined"
              name="bio"
              onChange={handleChange}
              style={{
                width: 400,
                fontSize: 7,
              }}
            />
            <br /><br />
            <label htmlFor="chicken-lover">Chicken Lover Status</label>
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
            <button type="submit">Update Profile</button>
          </div>
            <br />
        </form>
            <button className="dlt-user" onClick={() => {handleDeleteUser(user.id)}} >Delete Profile</button>
      </div>
        )
    }
}

export default withRouter(Edit)