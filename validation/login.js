const Validator = require('validator');
const isEmpty = require('../validation/is-Empty');

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.userName = !isEmpty(data.userName) ? data.userName : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    
    if(!Validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.email)){
        errors.email = 'Email is required';
    }
    
    if(Validator.isEmpty(data.password)){
        errors.password = 'Password is required';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};