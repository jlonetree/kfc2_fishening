import React from 'react'
import Homepage from './components/homepage/homepage'
import Registration from './components/register/registration'
import Login from './components/login/login'
import Edit from './components/edit/Edit'
import Profile from './components/profile/Profile'
// import Message from './components/message/Message'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const urlUsers = `http://localhost:3000/api/v1/users/`
const urlMessages = `http://localhost:3000/api/v1/messages/`
const urlChickens = `http://localhost:3000/api/v1/chickens/`
const url = "http://localhost:3000/api/v1/logout"

class App extends React.Component {

  state = {
    users: [],
    messages: [],
    currentUser: null
  }

  componentDidMount() {
    if(localStorage.token){
      fetch('http://localhost:3000/api/v1/user', {
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
      .then(res => res.json())
      .then(user => this.setState({currentUser: user}))
    }
    Promise.all([
      fetch(urlUsers),
      fetch(urlMessages)
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([users, messages]) => this.setState({
        users: users,
        messages: messages
      }))
  }

  handleLogout = () => {    

    fetch(url, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
    })
    .then(res => res.json())
    .then(response => {
        if(response.message){
            return this.setState({errorMessage: response.message})
        }
        localStorage.clear()
        localStorage.removeItem("token")
        this.setCurrentUser(null)
        return <Redirect to="/login" />
    })
  }

  setCurrentUser = user => {
    this.setState({ currentUser: user })
  }

  addUser = newUser => {
    this.setState({ users: [...this.state.users, newUser] })
  }

  addMessage = newMessage => {
    this.setState({ messages: [...this.state.messages, newMessage] })
  }

  removeMessage = delMessage => {
    this.setState({ messages: this.state.messages.filter(message => message.id !== delMessage.id) })
  }

  removeUser = delUser => {
    this.setState({ users: this.state.users.filter(user => user.id !== delUser.id) })
  }

  render() {
    const { addUser, addMessage } = this
    return (
      <Router>
        <div>
          <ul className="navbar">
            <li className="homepage">
              <Link to="/" >Home</Link>
            </li>
            {this.state.currentUser ? 
            <li className="logout-link" onClick={this.handleLogout}>
              <Link to="/login" >Logout</Link>
            </li> 
            :
            <li className="login-link">
              <Link to="/login" >Login</Link>
            </li>
            }
            <li className="registration-link">
              <Link to="/registration" >Registration</Link>
            </li>
            <li className="edit-link">
              <Link to="/edit" >Update User</Link>
            </li>
            <li className="profile-link">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="points-bar" style={{color: "black", float: "right", paddingRight: 50}}>
              <b>Score: {this.state.currentUser ? this.state.currentUser.total_points : 0}</b>
            </li>
          </ul>
          
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/login">
              <Login setCurrentUser={this.setCurrentUser}/>
            </Route>
            <Route exact path="/registration">
              <Registration addUser={addUser}/>
            </Route>
            <Route exact path="/edit">
              <Edit user={this.state.currentUser} removeUser={this.removeUser} handleLogout={this.handleLogout} />
            </Route>
            <Route exact path="/profile">
              <Profile user={this.state.currentUser} addMessage={addMessage} messages={this.state.messages} removeMessage={this.removeMessage} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
