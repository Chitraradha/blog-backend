const express=require("express")
const userModel=require("../models/user")
const router=express.Router()
const bcrypt=require("bcryptjs")

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}
  
router.post("/add",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password
    hashPasswordGenerator(password).then(
        (hashedPassword)=>{
            console.log(hashedPassword);
            data.password=hashedPassword
            console.log(data);
            let blog=new userModel(data)
            let result= blog.save()
            res.json({
                status:"Success"
            })
        }
    )
   
// const hashedPassword=await hashPasswordGenerator(password)
// data.password=hashedPassword
// let user=new userModel(data)
// let result=await user.save()
// res.json({
//     status:"Success"
// })
})


 router.post("/signin",async(req,res)=>{
    let input =req.body
    let Emailid=req.body.Emailid
    let data=await userModel.find({"Emailid":Emailid})
    if(!data)
    {
        return res.json({
            status:"invalid user"
    })
    }

    console.log(data);
    let dbPassword=data.password
    let inputPassword=req.body.password
    console.log(dbPassword);
    console.log(inputPassword);
    const match=await bcrypt.compare(inputPassword,dbPassword)
    {
        if(!match)
    {
        return res.json(
            {
                status:"invalid password"
            }
        )
    }}
    res.json({
    
        status:"SuccessfullyLogined"
    })
 })



module.exports=router 