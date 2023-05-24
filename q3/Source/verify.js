const jwt=require("jsonwebtoken")
const verify=async(req,res,next)=>{
     const token=req.headers["authorization"].split(" ")[1]

     jwt.verify(token,process.env.SECRET_KEY,(err,decode)=>{
         if(err){
            res.send(err.message)
         }else{
            req.user=decode
            next()
         }
     })
}
module.exports=verify