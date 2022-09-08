import React from 'react'
import { Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HeaderButtons = (props) => {
    return (
        <Col className='d-flex flex-row-reverse'>
            {(!props.isLogged)
                ? <Button variant="light">
                    <Link className='text-decoration-none text-dark' to='/'>
                        LogIn
                    </Link>
                </Button>
                : <>
                    <Button variant="light" onClick={props.onLogOut}>
                        <Link className='text-decoration-none text-dark' to='/'>
                            LogOut
                        </Link>
                    </Button>
                    <Button className='mx-2' variant="light">
                        <Link className='text-decoration-none text-dark' to='/users'>
                            Send Message
                        </Link>
                    </Button>
                </>
            }
        </Col>

    )
}

export default HeaderButtons