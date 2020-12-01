import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Message from '../message/Message'

class Profile extends Component {

    constructor() {
        super();
    
        this.state = {
            content: "",
            user_id: 0
        };
      }

    handleChange = (e) => {
        console.log( e.target.name, e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    };

    handleEditMessage = (e) => {
        e.preventDefault()
        // const {
        //     content
        // } = this.state
        console.log(e.target[0].value)

        console.log(`this works and will edit => ${this.props.message.id}`)

        fetch(`http://localhost:3000/api/v1/messages/${this.props.message.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "content": e.target[0].value
            })
        })
        .then(res => res.json())
        .then(updatedMessage => this.setState({content: updatedMessage}))
    }
    
    handleDeleteMessage = () => {
        console.log(`this works => ${this.props.message.id}`)
        fetch(`http://localhost:3000/api/v1/messages/${this.props.message.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(() => alert("Message successfully deleted"))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        console.log(`This Works, ${this.props.user.id}`)

        fetch(`http://localhost:3000/api/v1/messages`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                "content": e.target[0].value,
                "user_id": this.props.user.id
            })
        })
        .then(res => res.json())
        .then(newMessage => this.props.addMessage(newMessage))
    }

    render() {
        const { handleDeleteMessage, handleSubmit, handleChange } = this
        const { user, message } = this.props
        
        // console.log(this.props)
        return (
            <div className="profile_page">
                <div className="profile">
                    <div className="profile_pic">
                        <img 
                            src="https://icanmakeshoes.com/wp-content/uploads/2010/09/blank-profile-picture-600x600.png"
                            alt="default_img"
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 150 / 2,
                            }}
                        ></img>
                    </div>
                    <div className="name">
                        <h2>{user.name}</h2>
                    </div>
                    <form className="message-area" onSubmit={handleSubmit}>
                        <div className="message-box">
                            <label for="content"></label>
                            <TextField
                                id="outlined-multiline-static"
                                label="Message"
                                multiline
                                rows={4}
                                placeholder="Type Message Here"
                                variant="outlined"
                                name="content"
                                onChange={handleChange}
                                style={{
                                    width: 400,
                                }}
                            />
                            <br />
                            <button type="submit" style={{width: 75}}>Post</button>
                        </div>
                        <br />
                    </form>
                    <div className="feed-area">
                        <div className="feed" style={{ width: 400, height: 100, border: '2px solid lightgray', background: 'lightred'}}>
                            <button onClick={() => handleDeleteMessage(message.id)} className='dlt-btn'>X</button><br /><br />
                            {this.props.messages.map(message => {
                                return <Message message={message} />
                            })}
                            <br /><br />
                            <form className="edit-message" onSubmit={this.handleEditMessage}>
                                <label for="edit-content">Edit Message: </label>
                                <input type="text" id="edit-content" name="edit-content" placeholder="Edit Message Here" onChange={handleChange}/>
                                <button type="submit" style={{width: 75}}>edit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="right-side-bar">
                    <div className="Notifications" style={{ padding: 20 }}>
                    <Grid container spacing={5}>
                    </Grid>
                        <div className="delete-notification">

                        </div>
                    </div>
                    <div className="Advertisements">
                        <div className="delete-ad">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Profile);