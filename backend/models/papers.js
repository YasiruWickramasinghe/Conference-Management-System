const mongoose = require('mongoose');

const paperSchema = new mongoose.Schema({

    mTitle:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    abstract:{
        type: String,
        required: true
    },
    keyword:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    pLink:{
        type: String,
        //required: true
    },
    userId:{
        type: String,
        //required: true
    },
    status:{
        type: String,
        required: true
    },
    date:{
        type: String,
        //required: true
    },
    photo:{
        type: String,
        //required: true
    },



})

module.exports = mongoose.model('researchpapers', paperSchema)