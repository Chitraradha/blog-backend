const mongoose= require("mongoose")
const blogSchema=new mongoose.Schema(
    {
        Name:String,
        age:String,
        mobileno:String,
        address:String,
        pincode:String,
        Emailid:String,
        password:String

    }
)
module.exports=mongoose.model("Blog",blogSchema)