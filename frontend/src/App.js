import React from 'react'
import Homepage from './components/homepage/homepage'
import Registration from './components/register/registration'
import Login from './components/login/login'
import Edit from './components/edit/Edit'
import Profile from './components/profile/Profile'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const urlUser = `http://localhost:3000/api/v1/users/`
const urlMessage = `http://localhost:3000/api/v1/messages/`

class App extends React.Component {

  state = {
    users: [],
    messages: [],
    currentUser: {}
  }

  componentDidMount() {
    Promise.all([
      fetch(urlUser),
      fetch(urlMessage)
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([users, messages]) => this.setState({
        users: users,
        messages: messages
      }))
  }

  setCurrentUser = user => {
    this.setState({ currentUser: user })
  }

  addUser = newUser => {
    console.log(newUser)
    this.setState({ users: [...this.state.users, newUser] })
  }

  addMessage = newMessage => {
    console.log(newMessage)
    this.setState({ messages: [...this.state.messages, newMessage] })
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
            <li className="login">
              <Link to="/login" >Login</Link>
            </li>
            <li className="registration">
              <Link to="/registration" >Registration</Link>
            </li>
            <li className="edit">
              <Link to="/edit" >Update User</Link>
            </li>
            <li className="profile">
              <Link to="/profile">Profile</Link>
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
              <Edit user={this.state.currentUser}/>
            </Route>
            <Route exact path="/profile">
              <Profile user={this.state.currentUser} addMessage={addMessage} messages={this.state.messages}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
