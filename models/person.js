const mongoose=require('mongoose');

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],   //only these fields are accepted
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    }
})

//create person model

const person=mongoose.model('person',personSchema);
module.exports=person;



// {
//     "name": "Alice",
//     "age": 28,
//     "work": "chief",
//     "moblie": "123-456-7890",
//     "email": "alice@example.com",
//     "address": "main city, newyork",
//     "salary": 60000
// }