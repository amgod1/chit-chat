import { React, useEffect, useState } from 'react'
import { Container, Table, Alert, Col, Row } from 'react-bootstrap'
import * as Axios from 'axios'
import ChatControl from './ChatControl'
import User from './User'

const Users = (props) => {
    
    const onGetUsersInfo = () => {
        Axios.get('http://localhost:3306/api/get')
        .then((response) => {
            if (props.allUsersInfo === '' || (JSON.stringify(props.allUsersInfo) !== JSON.stringify(response.data))) {
                console.log('updating users data')
                props.onGetUsersInfo(response.data)
                return 
            }
            // console.log('no need to update data!')
        })
    }

    const onGetMessages = () => {
        Axios.get('http://localhost:3306/api/get/messages')
        .then((response) => {
            if (props.allMessages === '' || (JSON.stringify(props.allMessages) !== JSON.stringify(response.data))) {
                props.onGetMessages(response.data)
                console.log('updating messages data')
                return 
            }
            // console.log('no need to update messages!')
        })
    }

    const [show, setShow] = useState(false)
    const [user, setUser] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        setMessage('')
    }, [user])

    useEffect(() => {
        const interval = setInterval(() => {
            onGetUsersInfo()
            onGetMessages()
        }, 1000)
        return () => clearInterval(interval)
    })
    
    if (props.isLogged && !!props.allUsersInfo && !!props.allMessages) {

        let newMessages = props.allMessages.filter(el => el.userTo === localStorage.login && el.userRead === 0)

        let renderUsers
        if (props.isLogged && !!props.allUsersInfo) {
            renderUsers = props.allUsersInfo
                .filter(el => el.login !== localStorage.login)
                .map(el => <User 
                user = {user}
                key = {el.id} 
                login = {el.login}
                setUser = {setUser}
                setShow = {setShow}
                onCheckMessage = {props.onCheckMessage}
                newId = { newMessages.filter(e => e.userFrom === el.login).length > 0
                    ? 'NEW MESSAGES'
                    : ''
                }
        />)}

        return (
            <Container>
                <Container>
                    <Row className='mt-4'>
                        <Col sm={5}>
                            <Table striped bordered hover responsive="lg" variant={(props.theme) ? 'dark' : ''}>
                                <thead>
                                    <tr>
                                        <th className='text-center'>
                                            Users list   
                                        </th>
                                        <th className='text-center'>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { renderUsers }
                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                        {show 
                            ? <ChatControl 
                                user = {user}
                                message = {message}
                                setMessage = {setMessage}
                                allMessages = {props.allMessages}
                                onSendMessage = {props.onSendMessage}
                                onCheckMessage = {props.onCheckMessage}
                                newId = { newMessages.filter(e => e.userFrom === user).length > 0
                                    ? true
                                    : false
                                }
                            /> 
                            : <></>

                        }

                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    } else if (props.isLogged) {
        return (
            <Container>
                <Alert variant={'success'} className='mt-5 h-100 text-center'>
                    Loading users...
                </Alert>
            </Container>
        ) 
    }else return (
        <Container>
            <Alert variant={'danger'} className='mt-5 h-100 text-center'>
                YOU DON'T HAVE ACCESS TO THIS PAGE!!!
            </Alert>
        </Container>
    )
}

export default Users