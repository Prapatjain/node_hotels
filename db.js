const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURL='mongodb://localhost:27017/hotels'
// const mongoURL='mongodb+srv://Prapat:PrapatjainYY@cluster0.0pj4dzh.mongodb.net/'
const mongoURL=process.env.MONGODB_URL;

//setUp mongoDB connection
mongoose.connect(mongoURL,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
})

//get the default connection
//Mongoose maintain a  default connection object representing the MongoDB Connection

const db=mongoose.connection;

//define event listener for data connection

db.on('connected',()=>{
    console.log('Connected to MongoDB server');
})

db.on('error',(err)=>{
    console.error("mongoDB connection error: ",err)
});

db.on('disconnected',()=>{
    console.log("MongoDB disconnected");
});

//export the database connection
module.exports=db;