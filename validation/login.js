const Validator = require('validator');
const isEmpty = require('../validation/is-Empty');

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.userName = !isEmpty(data.userName) ? data.userName : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    
   // if(!Validator.isuserName(data.userName)){
     //   errors.userName = 'Username is invalid';
   // }

    if(Validator.isEmpty(data.userName)){
        errors.userName = 'Username is required';
    }
    
    if(Validator.isEmpty(data.password)){
        errors.password = 'Password is required';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
