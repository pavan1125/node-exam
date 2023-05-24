const mongoose=require("mongoose")
const schema=mongoose.Schema

const salarySchema=new schema({
     salary:Number,
     AccountNo:Number,
     BankName:String,
     user:{type:schema.Types.ObjectId,ref:"users"}
},{
     timestamps:true
})

const SalaryModel=mongoose.model("SalaryDetails",salarySchema)

module.exports=SalaryModel