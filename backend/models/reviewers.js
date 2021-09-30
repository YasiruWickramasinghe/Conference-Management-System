const mongoose = require('mongoose');

const reviewerSchema = new mongoose.Schema({

    first_name: {
        type: String,
    },

    last_name: {
        type:String,
        
    },

    email:{
        type:String,
        required:true
    },

    password: {
        type: String,
        required:true
    },

    date: {
        type:String,
        default:Date.now
    }
    
})

module.exports = mongoose.model('reviewers', reviewerSchema)