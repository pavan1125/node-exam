const express=require("express")
const users=require("./models/userModel")
const router=express.Router()
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
router.post("/login",async(req,res)=>{
      const body=req.body
      console.log(body)
      let password=body.Password
     let item=await users.findOne({name:body.name})
     body.role=item.role
     console.log(item)
     bcrypt.compare(password,item.Password,(err,result)=>{
        if(!result){
            res.send(err.message)
        }else{
            const gentoken=jwt.sign(body,process.env.SECRET_KEY)
            res.send({
                 ...body,
                 token:gentoken
            })
        }
     })
     
})

module.exports=router