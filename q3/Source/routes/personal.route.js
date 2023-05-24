const express=require("express")
const router=express.Router()
const personal=require("../models/personalModel")





router.post("/users/:id/personal",async(req,res)=>{
     const id=req.params.id
     const body=req.body
     body.user=id
     console.log(req.user)
     if(req.user.role==="HR"){

         const item=new personal(body)
         item.save().then(result=>res.send(result)).catch(err=>res.send(err.message))
     }else{
        res.status(401).send('permission denied')
    }

})
router.get("/users/:id/personal",async(req,res)=>{
    const id=req.params.id
    const body=req.body
    body.user=id
    console.log(req.user)
   const item=personal.findById(id)
   res.send(item)

})
router.patch("/users/:id/personal",async(req,res)=>{
    const id=req.params.id
    const body=req.body
    body.user=id 
    if(req.user.role==="HR"){

        const item= personal.findByIdAndUpdate(id,body)
        res.send(item)
    }else{
        res.status(401).send('permission denied')
    }


})
router.delete("/users/:id/personal",async(req,res)=>{
    const id=req.params.id
    const body=req.body
    body.user=id 
    if(req.user.role==="HR"){

        const item= personal.findByIdAndDelete(id)
        res.send(item)
    }else{
        res.status(401).send('permission denied')
    }


})

module.exports=router

