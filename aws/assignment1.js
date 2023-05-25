const aws = require("aws-sdk");
const fs = require("fs");
const mime=require("mime")
aws.config.update({
  accessKeyId:,
  secretAccessKey:,
});

const s3 = new aws.S3();

const uploadData=async()=>{
       s3.createBucket({
          Bucket:"assignment1day1-1126",
          CreateBucketConfiguration: {
            LocationConstraint:  "ap-south-1" },
      },(err,data)=>{
          if(err){
            console.log(err)
          }else{

            fs.readFile("./index.html","utf-8",(err,data)=>{
                   if(err){
                     console.log(err)
                   }else{

                       const params={
                           Bucket:"assignment1day1-1126",
                           Key:"index.html",
                           ContentType:"text/html",
                           Body:data
                        }
                       s3.upload(params,(err,data)=>{
                           if(err){
                               console.log(err)
                           }else{
                              const staticparams={
                                  Bucket:"assignment1day1-1126",
                                  WebsiteConfiguration:{
                                     IndexDocument:{
                                         Suffix:"index.html"
                                     }
                                  }
                              }
                            s3.putBucketWebsite(staticparams,(err,data)=>{
                                  if(err){
                                    console.log(err)
                                  }else{
                                    console.log(data)
                                  }
                            })
                           }
                       })
                   }
              })
          }
      })
}

uploadData()

