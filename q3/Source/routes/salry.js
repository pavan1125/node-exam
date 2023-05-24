const express=require("express")
const router=express.Router()
const salary=require("../models/SalaryModel")





router.post("/users/:id/salary",async(req,res)=>{
     const id=req.params.id
     const body=req.body
     body.user=id
     if(req.user.role==="HR"){

         const item=new salary(body)
         item.save().then(result=>res.send(result)).catch(err=>res.send(err.message))
     }else{
        res.status(401).send('permission denied')
     }

})
router.get("/users/:id/salary",async(req,res)=>{
    const id=req.params.id
    const body=req.body
    body.user=id
    let item=salary.findById(id)
    res.send(item)

})
router.patch("/users/:id/salary",async(req,res)=>{
    const id=req.params.id
    const body=req.body
    body.user=id
    if(req.user.role==="HR"){

        const item=new salary(body)
        item.save().then(result=>res.send(result)).catch(err=>res.send(err.message))
    }else{
       
        res.status(401).send('permission denied')
    
}
   

})
router.delete("/users/:id/salary",async(req,res)=>{
    const id=req.params.id
    const body=req.body
    body.user=id
    if(req.user.role==="HR"){

        const item=new salary(body)
        item.save().then(result=>res.send(result)).catch(err=>res.send(err.message))
    }else{
       
            res.status(401).send('permission denied')
        
    }

})

module.exports=router

