const Validator = require('validator');
const isEmpty = require('../validation/is-Empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.userName = !isEmpty(data.userName) ? data.userName : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';
    
    if(!Validator.isLength(data.userName, { min: 2, max:30 })){
        errors.name = 'Name must be between 2 and 30 characters';
    }

    if(Validator.isEmpty(data.email)){
        errors.email = 'Email is required';
    }

    if(!Validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.password)){
        errors.password = 'Password is required';
    }

    if(!Validator.isLength(data.password, { min: 6, max:30 })){
        errors.password = 'Password must be at least 6 characters';
    }

    if(Validator.isEmpty(data.password2)){
        errors.password2 = 'Password confirm password';
    }

    if(!Validator.equals(data.password, data.password2)){
        errors.password2 = 'Passwords do not match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
