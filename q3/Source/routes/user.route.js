const express=require("express")
const router=express.Router()
const user=require("../models/userModel")
const bcrypt=require("bcrypt")




router.post("/users",async(req,res)=>{
     const body=req.body
     body.role="Basic"
     let hashedPassword=await bcrypt.hash(body.Password,parseInt(process.env.SALTS))
     body.Password=hashedPassword

     const item=new user(body)
     item.save().then(result=>res.send(result)).catch(err=>res.send(err.message))

})

module.exports=router

