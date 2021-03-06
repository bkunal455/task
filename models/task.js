const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    pin : {
        type: String,
        required: true
    },
    status : {
        type : String,
        required : true
    }

});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

