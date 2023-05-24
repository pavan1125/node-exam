const mongoose=require("mongoose")
const schema=mongoose.Schema

const userSchema=new schema({
      name:String,
      Password:String,
      role:String
},{timestamps:true})

const userModel=mongoose.model("users",userSchema)

module.exports=userModel