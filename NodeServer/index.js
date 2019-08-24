const express = require('express');
const userRoute = require('./routes/users');
const mongoose = require('mongoose');

var MONGODB_URI = "mongodb://localhost:27017/usermanual"; 
  
// connect to MongoDB 
mongoose.connect(MONGODB_URI, {useNewUrlParser: true}); 
mongoose.connection.on('connected', () => { 
    console.log('Connected toMongoDB'); 
}); 

const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//For parsing
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

//Routing
app.use('/', userRoute)


const port = 3000
app.listen(port, () => console.log(`app listening on port ${port}!`))