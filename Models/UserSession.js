var mongoose = require('mongoose');

var UserSessionSchema = new mongoose.Schema({
    userName: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    isLoggedIn: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('UserSession', UserSessionSchema);