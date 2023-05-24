const express=require('express')
const router=express.Router()
const state=require("../models/StateModel")



router.post("/states",async (req,res)=>{
      const body=req.body 
      const item=new state(body)
      item.save().then(result=>res.send(result)).catch(err=>res.send(err.message))
})

module.exports=router
