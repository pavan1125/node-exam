const aws = require("aws-sdk");

aws.config.update({
  accessKeyId: "AKIAUDKK2YOPXSVP4QC7",
  secretAccessKey: "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",
});

const s3 = new aws.S3();

const createBucket = async () => {
//   const params = {
//     Bucket: "practice4bucket1125",
//     ACL:"private",
//     ObjectLockEnabledForBucket:true,
//     CreateBucketConfiguration: {
//       LocationConstraint: "ap-south-1"
//     },

//     ObjectOwnership: "BucketOwnerPreferred",
//   };

//   s3.createBucket(params, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data.Location);
//     }
//   });


      s3.createBucket({
        Bucket: "mylastandfirstbucket0f2023",
        ACL: 'public-read',
        CreateBucketConfiguration: {
          LocationConstraint: 'us-east-1'
        }
      }, (err, data) => {
        if (err) {
          console.log('Error creating bucket:', err);
        } else {
          console.log('Bucket created successfully',data.Location)
          s3.putPublicAccessBlock({
            Bucket: "mylastandfirstbucket0f2023",
            PublicAccessBlockConfiguration: {
              BlockPublicAcls: false,
              BlockPublicPolicy: false,
              IgnorePublicAcls: false,
              RestrictPublicBuckets: false
            }
          }, (err, data) => {
            if (err) {
              console.log('Error updating Block Public Access:', err);
            } else {
              console.log('Block Public Access configuration updated successfully')
            
        }
      });
    }

})
} 
createBucket()
