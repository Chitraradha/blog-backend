const express=require("express")
const postModel=require("../models/postmodel")
const route=express.Router()

route.post("/add",async(req,res)=>{
    let data=req.body
    let post=new postModel(data)
    let result=await post.save()
    res.json({
        status:"success"
    })
})

route.get("/viewall",async(req,res)=>{
    let result=await postModel.find()
    .populate("Userid","Name age mobileno address pincode -_id ")
    .exec()
    res.json(result)  

})

module.exports=route