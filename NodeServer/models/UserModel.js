const mongoose = require('mongoose');
/* Basic schema for the User defined */

const usermode = new  mongoose.Schema({
    name: {type: String},
    email: {type: String},
    hash: {type: String},
    createdAt: {type: Date},
    updatedAt: {type: Date}
})

module.exports =  mongoose.model('User', usermode);