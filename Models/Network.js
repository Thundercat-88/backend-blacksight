const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const NetworkSchema = new Schema({
    ip: {
        type: String,
        default: '',
        required: false
    },
    mac: {
        type: String,
        default: '',
        required: false
    }
});

module.exports = Network = mongoose.model('network', NetworkSchema);