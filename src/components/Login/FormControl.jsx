import React from 'react'
import { Row, Form } from 'react-bootstrap'

const FormControl = (props) => {
    return (
      <Row>
        <Form.Control 
          className = 'my-2' 
          id = {props.id}
          type = {props.type} 
          placeholder = {props.placeholder} 
          value = {props.value} 
          onChange = {props.onChange}
          maxLength={30}
        />
      </Row>
    )
}

export default FormControl