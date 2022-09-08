import { createAction } from "@reduxjs/toolkit"
import Axios from 'axios'

const LOG_IN_ACCOUNT = 'LOG_IN_ACCOUNT'
const CHECK_LOGIN = 'CHECK_LOGIN'
const LOG_OUT_ACCOUNT = 'LOG_OUT_ACCOUNT'
const CREATE_ACCOUNT = 'CREATE_ACCOUNT'

let initialState = {
    userInfo: '',
    logOutNumber: 0,
    createdAccount: 0,
    isLogged: 0,
}

if (!!localStorage.getItem('userInfo')) {
    initialState.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    initialState.isLogged = 1
}

const logInReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_ACCOUNT:
            Axios.get('http://localhost:3306/api/get').then((response) => {
                let user = response.data.filter(el => el.login === action.payload.login && el.password === action.payload.password)
                if (user.length === 1) { 
                    localStorage.setItem('userInfo', JSON.stringify(user[0]))
                    localStorage.setItem('login', user[0].login) 
                } else alert('Invalid login or password')
            })
            return {...state}
        case CHECK_LOGIN:
            if (!!localStorage.login) {
                return {...state, isLogged: 1, userInfo: localStorage.userInfo}
            } else return {...state}
        case LOG_OUT_ACCOUNT:
            localStorage.removeItem('userInfo')
            localStorage.removeItem('login')
            return {...state, userInfo: '', isLogged: 0}
        case CREATE_ACCOUNT:
            let regDate = new Date().toISOString().slice(0, 10).split('-')
            regDate[2] = Number(regDate[2]) + 1
            if (regDate[2] < 10) regDate[2] = '0' + regDate[2]
            regDate = regDate.join('-')

            Axios.post('http://localhost:3306/api/insert', {
                mailReg: action.payload.mailReg,
                loginReg: action.payload.loginReg,
                passwordReg: action.payload.passwordReg,
                regDate: regDate
            })
            return {...state, createdAccount: 1}
        default:
            return state
    }
}

export const logInAccountAC = createAction (LOG_IN_ACCOUNT, function prepare(login, password) { return { payload: {login, password} }})
export const checkLoginAC = createAction (CHECK_LOGIN)
export const logOutAccountAC = createAction (LOG_OUT_ACCOUNT)
export const createAccountAC = createAction (CREATE_ACCOUNT, function prepare(mailReg, loginReg, passwordReg) { return { payload: {mailReg, loginReg, passwordReg} }})

export default logInReducer