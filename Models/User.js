const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    userName: {
        type: String,
        default: '',
        required: true
    },
    email: {
        type: String,
        default: '',
        required: true
    },
    password: {
        type: String,
        default: '',
        required: true
    },
    avatar: {
        type: String,
        default: '',
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    isBanned: {
        type: Boolean,
        default: false
    }
});


module.exports = User = mongoose.model('users', UserSchema);