import React from 'react'
import PropTypes from 'prop-types'
import { Form, Message } from 'semantic-ui-react'

const TextField = ({
    name,
    placeholder,
    value,
    label,
    error,
    info,
    type,
    onChange,
    disabled
}) => {
    
  return (  
    <div>
        <Form.Input
            fluid
            label={label}
            name={name}     
            type={type}
            placeholder={placeholder}
            value={value}
            info={info}
            onChange={onChange}
            disabled={disabled}  
    
             />    
            <Message 
            errorheader='Action Forbidden'
            content={error}
             />     
    </div>
  )
}

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string,
}

TextField.defaultProps = {
    type: 'text'
}

export default TextField;