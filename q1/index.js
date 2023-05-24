

async function login(userName,gender){
    const item={ 
         username:userName,
        LoginDate:new Date(),
        gender:gender
    }
  
    setTimeout(()=>{
         console.log(item.username)
    },1000*60)
    
    return item
  
} 

function greeting(item){
    let hours=item.LoginDate.getHours()
    let minutes=item.LoginDate.getMinutes()
     let year=item.LoginDate.getFullYear()
     let month=item.LoginDate.getMonth()
     let day=item.LoginDate.getDate()
   
     if(item.gender==="male"){
        console.log(`Mr.${item.username} login an ${day}/${month+1}/${year} at ${hours}:${minutes}`)
        console.log("welcome to the application")
     }else{
        console.log(`Ms.${item.username} login an ${item.LoginDate} at ${item.LoginDate}`)
        console.log("welcome to the application")

     }
}
// let details= login("pavan","male").then(res=>greeting(res))

async function details(name,gender){
      let details=await login(name,gender)
      await greeting(details)
      
}
details("pavan","male")