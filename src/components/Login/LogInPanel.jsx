import { React, useState } from 'react'
import FormControl from './FormControl'
import { Alert, Row, Button } from 'react-bootstrap'

const LogInPanel = (props) => {

    const [logInLogin, setLogInLogin] = useState('')
    const [logInPass, setLogInPass] = useState('')

    const clearForms = () => {
        if (!!localStorage.login) {
            setLogInLogin('')
            setLogInPass('')
        }
    }

    const onLoginIn = () => {
        props.onLoginIn(logInLogin, logInPass)
        const timer = setTimeout(() => {
            props.onCheckLogin()
            clearForms()
        }, 1000)
        return () => clearTimeout(timer);
    }
  
    let onLoginInChange = (e) => {
        let text = e.target.value
        setLogInLogin(text)
    }
  
    let onPasswordInChange = (e) => {
        let text = e.target.value
        setLogInPass(text)
    }

    let loginInput = [
        {key: 1, type: 'text', placeholder: 'login', value: logInLogin, onChange: onLoginInChange},
        {key: 2, type: 'password', placeholder: 'password', value: logInPass, onChange: onPasswordInChange, id: 'inputPassword5'},
    ]

    let loginMenu = loginInput.map(el => 
        <FormControl 
            placeholder={el.placeholder} 
            value={el.value} 
            onChange={el.onChange} 
            key={el.key} 
            id={el.id} 
            type={el.type} 
        />
    )

    return (
        (props.isLogged)
            ? <Alert variant={'success'} className='mt-5 h-100 text-center'>
                Congratulations!!! You logged in your account!
            </Alert>
            : <>
            <div>
                <Row className='mt-5'>
                    Log in to your account:  
                </Row>
                { loginMenu }
                <Row>
                    <Button className='mt-3' onClick={ onLoginIn }>
                        Log In
                    </Button>
                </Row>
            </div>
            </>
    )
}

export default LogInPanel