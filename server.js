const express=require('express');
const app=express();
const port=3000;

const db=require('./db');

const menuItem=require("./models/menuItem");

const bodyParser = require('body-parser');
app.use(bodyParser.json());  //store data in req.body

app.get('/', function(req,res){
    res.send("welcome to home page!")
})

// app.post("/person",(req,res)=>{
//     const data=req.body;

//     const newPerson= new person(data);
//     // const newPerson= new person();
//     // newPerson.name=data.name;
//     // newPerson.age=data.age;

//     newPerson.save((error,savedPerson)=>{                          //save callback mathod is depriciated so we use async and await
//         if(error){
//             console.log('Error saving person: ',error);
//             res.status(500).json({error:'enternal server error'})
//         }
//         else{
//             console.log("data saved successfully");
//             res.status(200).json(savedPerson);
//         }
//     })
// })




//import the router files
const personRoutes=require("./routes/personRoutes");
const menuItemRoutes=require("./routes/menuItemRoutes");

//use the router
app.use("/person",personRoutes);
app.use("/menu",menuItemRoutes);

app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`);
})