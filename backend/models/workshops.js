const mongoose = require('mongoose');

const workshopSchema = new mongoose.Schema({

    wTitle:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },
    ppLink:{
        type: String,
        
    },
    status:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    wGoal:{
        type: String,
        required: true
    },
    tAudiance:{
        type: String,
        required: true
    },
    pName:{
        type: String,
        required: true
    },


})

module.exports = mongoose.model('workshops', workshopSchema)