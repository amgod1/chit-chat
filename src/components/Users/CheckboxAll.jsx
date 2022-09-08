import React from 'react'
import { Form } from 'react-bootstrap'

const CheckboxAll = (props) => {

    const changeCheck = (checked) => {
        props.setCheck(checked)
        props.onCheckAll(!props.check, props.allUsersInfo.map(el => el.id))
    }

    return (
        <Form.Check 
            type='checkbox'
            checked={ props.check }
            onChange={(e) => changeCheck(e.target.checked)}
        />
    )
}

export default CheckboxAll