const express=require('express')
const router=express.Router()

const user=require("../models/userModel")

router.post("/users",async(req,res)=>{
      const body=req.body

      const item=new user(body)
       item.save().then(result=>res.send(result)).catch(err=>res.send(err.message))
})

router.get("/users/:stateId/:cityId",async(req,res)=>{
      const cityId=req.params.cityId
      const stateid=req.params.stateId
      const items=await user.find({stateid:stateid,cityid:cityId})
      let numberOfEmployees=items.length
      res.send(`number of employees is  ${numberOfEmployees}`)
    //   res.send(items.length)
})

router.get("/users/joiningDate",async(req,res)=>{
     const users=await user.aggregate([{$group:{DOJ:"$DOJ"}}])
     console.log(users)
     res.send(users)
})

module.exports=router