const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const blogrouter=require("./controller/blogrouter")
const postrouter=require("./controller/postrouter")
const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Chitrakradha2000:radha2000@cluster0.djtheuk.mongodb.net/blogDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)

app.use("/api/post",postrouter)

app.use("/api/blog",blogrouter)

app.listen(3012,()=>{
    console.log("server running");
})