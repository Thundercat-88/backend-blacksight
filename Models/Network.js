const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const NetworkSchema = new Schema({
    host_name: {
        type: String,
        default: '',
        required: false
    },
    host_ip: {
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