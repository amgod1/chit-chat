import { React, useState } from 'react'
import FormControl from './FormControl'
import { Alert, Row, Button } from 'react-bootstrap'

const CreateAccountPanel = (props) => {

    const [createMail, setCreateMail] = useState('')
    const [createLogin, setCreateLogin] = useState('')
    const [createPass, setCreatePass] = useState('')

    const onCreateAccount = () => {  
        if (createMail === '' || createMail === ' ') {alert('Change register mail'); return} 
        if (createLogin === '' || createLogin === ' ') {alert('Change register login'); return} 
        if (createPass === '' || createPass === ' ') {alert('Change register password'); return} 
        props.onCreateAccount(createMail, createLogin, createPass)
    }
  
    let onMailRegChange = (e) => {
        let text = e.target.value
        setCreateMail(text)
    }
  
    let onLoginRegChange = (e) => {
        let text = e.target.value
        setCreateLogin(text)
    }
  
    let onPasswordRegChange = (e) => {
        let text = e.target.value
        setCreatePass(text)
    }
  
    let registerInput = [
            {key: 1, type: 'email', placeholder: 'mail', value: props.mailReg, onChange: onMailRegChange},
            {key: 2, type: 'text', placeholder: 'login', value: props.loginReg, onChange: onLoginRegChange},
            {key: 3, type: 'text', placeholder: 'password', value: props.passwordReg, onChange: onPasswordRegChange}
        ]

    let registerMenu = registerInput.map(el => 
        <FormControl 
            placeholder={el.placeholder} 
            value={el.value} 
            onChange={el.onChange} 
            key={el.key} 
            type={el.type} 
        />
    )
  
    return (
        <>
            {(props.createdAccount)
                ? <Alert variant={'success'} className='mt-5 h-100 text-center'>
                    Congratulations!!! You just created new account!
                </Alert>
                : 
                <div>
                    <Row className='mt-5'>
                        Or create new one:
                    </Row>
                    { registerMenu }
                    <Row>
                        <Button className='mt-3' onClick={ onCreateAccount }>
                            Create Account
                        </Button>
                    </Row>
                </div>
            }
        </>
    )
}

export default CreateAccountPanel