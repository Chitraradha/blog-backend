const express=require("express")
const userModel=require("../models/user")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let blog=new userModel(data)
    let result=await blog.save()
    res.json({
        status:"Success"
    })
})

module.exports=router