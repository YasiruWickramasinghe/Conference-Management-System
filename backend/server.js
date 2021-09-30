const express = require('express');
var path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


const app = express();

//import routes
const paperRoutes = require('./routes/papers');
const notifyPaperRoutes = require('./routes/paperNotification');
const workshpRoutes = require('./routes/workshops');
const notifyWorkshopRoutes = require('./routes/workshopNotification');
const reviewerRoutes = require('./routes/reviewers');



//app middleware
app.use(bodyParser.json());
app.use(cors());

app.use(
    bodyParser.urlencoded({
        extended:false
    })
)

//routes middleware
app.use(paperRoutes);
app.use(notifyPaperRoutes);
app.use(workshpRoutes);
app.use(notifyWorkshopRoutes);
app.use(reviewerRoutes);



const PORT = 8000;

const DB_URL = process.env.MONGODB_URL;

mongoose.connect(DB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false

})
.then(()=>{
    console.log('DB Connected');
})
.catch((err) => console.log('DB Connection error', err));


app.listen(PORT, () =>{
    console.log(`app is running on : ${PORT}`);
});

module.exports = app; 