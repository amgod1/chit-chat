import { React } from 'react'
import { Button } from 'react-bootstrap'

const User = (props) => {

    const startChat = () => {
        props.setUser(props.login)
        props.setShow(true)
        if (!!props.newId) props.onCheckMessage(localStorage.login, props.login)
    }

    return (
        <tr>
            <th className='text-center'>
                <Button 
                    onClick = { startChat }
                >
                    {props.login}
                </Button>
            </th>
            <th className='text-center text-primary'>
                {props.newId}
            </th>
        </tr>
    )
}

export default User