const aws = require("aws-sdk");

aws.config.update({
});

const s3 = new aws.S3();


const createbucket=async()=>{
       const params={
          Bucket:"mypracticebucket1125",
          CreateBucketConfiguration:{
              LocationConstraint:"ap-south-1"
          }
       }
     
        s3.createBucket(params,(err,data)=>{
            if(err){
              console.log(err)
            }else{
              const publicparams={
                Bucket:"mypracticebucket1125",
                PublicAccessBlockConfiguration:{
                 BlockPublicAcls:false,
                 IgnorePublicAcls:false,
                 BlockPublicPolicy:false,
                 RestrictPublicBuckets:false
                }
            }
          s3.putPublicAccessBlock(publicparams,(err,data)=>{
               if(err){
                  console.log(err)
               }else{
                const policyparams={
                  Bucket:"mypracticebucket1125",
                  Policy:`{
                   "Version": "2012-10-17",
                   "Id": "Policy1684993526701",
                   "Statement": [
                       {
                           "Sid": "Stmt1684993525630",
                           "Effect": "Allow",
                           "Principal": "*",
                           "Action": [
                               "s3:GetObject",
                               "s3:PutObject"
                           ],
                           "Resource": "arn:aws:s3:::mypracticebucket1125/*"
                       }
                   ]
               }`
              }
              s3.putBucketPolicy(policyparams,(err,data)=>{
                 if(err){
                    console.log(err)
                 }else{
                      const fileParams={
                           Bucket:"mypracticebucket1125",
                           Key:"index.txt",
                           ContentType:"text/plain",
                           Body:"hello everyOne"
                      }
                      s3.upload(fileParams,(err,data)=>{
                        if(err){ 
                           console.log(err)
                        }else{
                           console.log(data.Location)
                        }
                      })
                 }
              })
            }
        })
               }
             })
              
}

createbucket()
