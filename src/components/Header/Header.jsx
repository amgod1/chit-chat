import React from 'react'
import { Container, Row } from 'react-bootstrap'
import HeaderButtons from './HeaderButtons'

const Header = (props) => {
    return (
        <Container className='border border-primary rounded-bottom bg-primary'>
            <Row className='my-3 d-flex justify-content-center flex-column flex-md-row' >
                <HeaderButtons
                    isLogged = {props.isLogged}
                    onLogOut = {props.onLogOut}
                />
            </Row>
        </Container>
    )
}

export default Header