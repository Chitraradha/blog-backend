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

module.exports=route