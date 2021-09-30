const mongoose = require('mongoose');

const paperNotificationSchema = new mongoose.Schema({

    mTitle:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        //required: true
    },
    paperId:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
    

})

module.exports = mongoose.model('researchpapernotify', paperNotificationSchema)