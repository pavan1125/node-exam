const mongoose=require("mongoose")


const schema=mongoose.Schema
const citySchema=new schema({
    _id:Number,
    name:{type:String,required:true}
})
const stateSchema=new schema({
    Name:{type:String,required:true},
    cities:[citySchema]
    
},{
   timestamps:true
})

const stateModel=mongoose.model("states",stateSchema)

module.exports=stateModel