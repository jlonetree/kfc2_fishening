import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
import Message from '../message/Message'

class Profile extends Component {

    constructor() {
        super();

        this.state = {
            content: ""
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault()

        let newMessage = {
            content: e.target[0].value,
            user_id: this.props.user.id,
        }

        fetch(`http://localhost:3000/api/v1/messages`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newMessage)
        })
            .then(res => res.json())
            // .then (this.props.addMessage(newMessage))
            .then(newMessage => {
                if(!newMessage.error){
                    this.props.addMessage(newMessage)
                }
            })
    }

    render() {
        const { handleSubmit, handleChange } = this
        const { user, removeMessage } = this.props

        return (
            <div className="profile_page">
                <div className="profile">
                    <div className="profile_pic">
                        {/* {!user.img_url ?  */}
                        <img
                            src="https://icanmakeshoes.com/wp-content/uploads/2010/09/blank-profile-picture-600x600.png"
                            alt="default_img"
                            className="profile-picture"
                            style={{
                                width: 200,
                                height: 200,
                                borderRadius: 200 / 2,
                            }}
                        ></img>
                        {/* 
                        <img
                            src={user.img_url}
                            alt="profile_img"
                            className="profile-picture"
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 150 / 2,
                            }}
                        ></img>
                        } */}
                    </div>
                    <div className="name">
                        <h2 style={{color: "white"}}>{user?.name}</h2>
                    </div>
                    <form className="message-area" onSubmit={handleSubmit}>
                        <div className="message-box">
                            <label htmlFor="content"></label>
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
                                    backgroundColor: "white",
                                }}
                            />
                            <br /><br />
                            <button type="submit" style={{ width: 75 }}>Post</button>
                        </div>
                        <br />
                    </form>
                    <div className="feed-area" >
                        <div className="feed" >
                            {this.props.messages.map(message => {
                                return <Message message={message} key={message.id} removeMessage={removeMessage}/>
                            })}
                        </div>
                    </div>
                </div>
                {/* <div className="right-side-bar">
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
                </div> */}
            </div>
        )
    }
}

export default withRouter(Profile);