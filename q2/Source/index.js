const mongoose=require("mongoose")

const express=require("express")
const app=express()
const state=require("./routes/state.route")
const user=require("./routes/user.route.js")
app.use(express.json())





mongoose.connect("mongodb://localhost:27017/internalExam").then(console.log("connected"))

app.use("/api",state)
app.use("/api",user)

app.listen(3000)