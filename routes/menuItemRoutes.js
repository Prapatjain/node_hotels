const express=require("express");
const router=express.Router();

const menuItem=require("../models/menuItem");

router.get("/",async(req,res)=>{
    try{
        const data=await menuItem.find();
        console.log("data fetched sucessfully!");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error!'})
    }
    
})

router.post("/",async(req,res)=>{
    try{
        const data=req.body;

        const personalMenu=new menuItem(data);
        const response=await personalMenu.save();
        console.log("data saved successfully!");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error!'})
    }
});

router.get("/:tasteType",async(req,res)=>{
    try{
        const tasteType=req.params.tasteType;

        if(tasteType=="sweet"|| tasteType=="sour"|| tasteType=="spicy"){
            const response=await menuItem.find({taste:tasteType});
            console.log("data fetch successfully!!");
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:'invalid tasteType'});
        }
    }
    catch(err){
        res.status(500).json({error:"internal server error"});
    }
})

router.put("/:id",async(req,res)=>{
    try{
        const updatedMenuData=req.body;
        const menuId=req.params.id;

        const response=await menuItem.findByIdAndUpdate(menuId,updatedMenuData,{
            new:true,
            runValidators:true
        })
        if(!response){
            console.log("menu not found");
            res.status(404).json({error:"menu not found"});
        }
        else{
            console.log("data updated");
            res.status(200).json(response);
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json({error:'internal server error'});
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const menuId=req.params.id;

        const response=await menuItem.findByIdAndDelete(menuId);
        
        if(!response){
            console.log("menu not found");
            res.status(404).json({error:"menu not found"});
        }
        else{
            console.log("data deleted");
            res.status(200).json({eror:'data deleted successfully'});
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json({error:'internal server error'});
    }
})

module.exports=router;
//comment added for testing purpose
