import React, { Component } from 'react'

export default class Message extends Component {

    constructor() {
        super();
    
        this.state = {
            edit: false
        };
      }

    editToggle = () => {
        let edit = !this.state.edit
        this.setState({edit})
    }

    handleDeleteMessage = () => {
        fetch(`http://localhost:3000/api/v1/messages/${this.props.message.id}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${localStorage.token}`
            }
        })
        .then(res => res.json())
        .then(() => {
            this.props.removeMessage(this.props.message)
            alert("Message successfully deleted")
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleEditMessage = (e) => {
        e.preventDefault()

        fetch(`http://localhost:3000/api/v1/messages/${this.props.message.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                "content": e.target[0].value
            })
        })
        .then(res => res.json())
        .then(updatedMessage => this.setState({content: updatedMessage}))
    }

    render() {
        const { handleDeleteMessage, handleChange, handleEditMessage, editToggle } = this
        const { message } = this.props
        let messageShow;
        function editForm() {
            return (
                <div>
                    <form className="edit-message" onSubmit={handleEditMessage}>
                        <label for="edit-content">Edit Message: </label>
                        <input type="text" id="edit-content" name="edit-content" defaultValue={message.content} onChange={handleChange}/>
                        <br /><br />
                        <button type="submit" style={{width: 75}}>submit</button>
                    </form>
                </div>
        )}
        
        if(this.state.edit) {
            messageShow = editForm()
        } else {
            messageShow = null
        }

        let ts = new Date();
        
        return (
            <div className="message-feed">
                <button onClick={() => handleDeleteMessage(message.id)} className='dlt-btn'>X</button>
                <br />
                <br />
                    <img
                        src={message.user.img_url}
                        alt="user-pics"
                        className="profile-picture"
                        style={{
                            width: 300,
                            height: 300,
                            borderRadius: 300 / 2,
                        }}
                    ></img>
                <br /><br />
                <h3>{message.user.name}</h3>
                {message.content}
                <br /> <br />
                <b><u>Updated On:</u></b> {ts.toDateString(message.updated_at)}
                <br /><br />
                <button onClick={editToggle}>Edit Toggle</button>
                <br /><br />
                {messageShow}
            </div>
        )
    }
}
