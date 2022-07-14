const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    username : {
        type : String,
        unique : true,
        required : true,
        trim : true
    },
    password : {
        type : String,
        required : true,
        trim : true
    }
});

const Model = new mongoose.model('userauth', tableSchema);

module.exports = Model; 