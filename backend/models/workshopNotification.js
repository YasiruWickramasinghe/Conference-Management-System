const mongoose = require('mongoose');

const workshopNotificationSchema = new mongoose.Schema({

    wTitle:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        //required: true
    },
    workshopId:{
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
    },
    


})

module.exports = mongoose.model('workshopnotify', workshopNotificationSchema)