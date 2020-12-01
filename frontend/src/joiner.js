import React from 'react'
import Profile from './components/profile/Profile'
import Edit from './components/edit/Edit'

export default function joiner(props) {

    const { currentUser, messages } = props

    return (
        <div className="joiner">
            <div className="profile-joiner">
                {console.log(currentUser, messages)}
                {currentUser.name ? <Profile 
                    user={props.currentUser}
                /> : null}
                {/* {messages ? messages.map( message => <Profile 
                    key={message.id}
                    message={message}
                />) : null} */}
            </div>
            <div className="edit-joiner">
                {props.currentUser.name ? <Edit 
                    user={props.currentUser}
                /> : null}
                {/* {messages ? messages.map( message => <Edit
                    key={message.id}
                    message={message}
                />) : null} */}
            </div>
        </div>
    )
}
