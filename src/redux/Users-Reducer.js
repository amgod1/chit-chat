import { createAction } from "@reduxjs/toolkit"
import * as Axios from 'axios'

const GET_USERS_INFO = 'GET_USERS_INFO'
const GET_MESSAGES = 'GET_MESSAGES'
const SEND_MESSAGE = 'SEND_MESSAGE'
const CHECK_MESSAGE = 'CHECK_MESSAGE' 

let initialState = {
    allUsersInfo: '',
    allMessages: ''
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_INFO:
            return {...state, allUsersInfo: action.payload.allUsers }
        case GET_MESSAGES:
            return {...state, allMessages: action.payload.messages }
        case SEND_MESSAGE:
            Axios.post('http://localhost:3306/api/insert/message', {
                userTo: action.payload.to,
                userFrom: action.payload.from,
                text: action.payload.text
            })
            return {...state}
        case CHECK_MESSAGE:
            console.log(action.payload)
            Axios.put('http://localhost:3306/api/update/unread', {
                userTo: action.payload.to,
                userFrom: action.payload.from
            })
            return {...state}
        default:
            return state
    }
}

export const getUsersInfoAC = createAction (GET_USERS_INFO, function prepare(allUsers) { return { payload: {allUsers} }})
export const getMessagesAC = createAction (GET_MESSAGES, function prepare(messages) { return { payload: {messages} }})
export const sendMessageAC = createAction (SEND_MESSAGE, function prepare(to, from, text) { return { payload: {to, from, text} }})
export const checkMessageAC = createAction (CHECK_MESSAGE, function prepare(to, from) { return { payload: {to, from} }})

export default usersReducer