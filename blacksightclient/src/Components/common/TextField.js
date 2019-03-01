import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'

const TextField = ({
    name,
    placeholder,
    value,
    label,
    err,
    info,
    type,
    onChange,
    disabled
}) => {
    
  return (  
    <Form loading>
      <Form err>
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
            error={err}
             />       
        </Form>
    </Form>
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