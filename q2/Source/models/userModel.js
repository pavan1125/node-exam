const mongoose=require("mongoose")


const schema=mongoose.Schema

const userSchema=new schema({
    Name:String,
    Password:String,
    DOB:Date,
    DOJ:Date,
    PanCard:String,
    City:String,
    stateid:{type:schema.Types.ObjectId,ref:"states"},
    cityid:{type:Number},
    ReportingHead:String
},{timestamps:true})


const userModel=mongoose.model("users",userSchema)

module.exports=userModel

