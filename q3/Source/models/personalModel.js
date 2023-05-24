const mongoose=require("mongoose")
const schema=mongoose.Schema

const personalSchema=new schema({
      name:String,
      age:Number,
      city:String,
      State:String,
      phone:Number,
      gender:String,
      user:{type:schema.Types.ObjectId,ref:"users"}
},{timestamps:true})

const personalModel=mongoose.model("personalDetails",personalSchema)

module.exports=personalModel