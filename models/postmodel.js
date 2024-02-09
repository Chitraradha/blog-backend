const mongoose=require ("mongoose")
const postSchema= new mongoose.Schema(
    {
        Userid:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"Blog"
        },
        post:{
            type:String,
            required:true
        },
        postedDate:{
            type:Date,
            default:Date.now
        }
    }
)
module.exports=mongoose.model("bolgpost",postSchema)