import React from 'react'
import {Form, Button} from 'react-bootstrap'

const ChatControl = (props) => {

    let renderChat = props.allMessages
        .filter(el => 
            (el.userFrom === props.user && el.userTo === localStorage.login) ||
            (el.userFrom === localStorage.login && el.userTo === props.user))
        .map(el => 
        <div 
            key = {el.id} 
            className={
                el.userFrom !== localStorage.login
                    ? 'd-flex flex-row-reverse text-primary'
                    : ''
            }
        >
            {el.message}
        </div>)

    const sendMessage = () => {
        props.onSendMessage(props.user, localStorage.login, props.message)
        props.onCheckMessage(localStorage.login, props.user)
        props.setMessage('')
    }

    const changeText = (e) => {
        props.setMessage(e.target.value)
        if (props.newId) props.onCheckMessage(localStorage.login, props.user)
    }

    return (
        <div>
            <h3>
                Chat with {props.user}:
            </h3>
            <div className='d-flex justify-content-between px-3'>
                <h6>
                    {localStorage.login}:
                </h6>
                <h6>
                    {props.user}:
                </h6>
            </div>
            <div className='border border-dark rounded px-2 py-3'>
                { renderChat.length > 0
                    ? renderChat
                    : <h5 className='text-primary text-center'>
                        Start dialog with this user!
                    </h5>
                }
            </div>
            <div className='mt-3 mb-5'>            
                <Form.Control
                    type='text'
                    as='textarea'
                    placeholder='Type message here'
                    value  = {props.message}
                    // onChange = {(e) => props.setMessage(e.target.value)}
                    onChange = { (e) => changeText(e) }
                />
                <Button className='my-3' onClick={ sendMessage }>
                    SEND
                </Button>
            </div>

        </div>
    )
}

export default ChatControl
