const express = require('express')
const app = express()

app.get("/",(req,res)=>{
 res.json("hello world")
//  console.log(req.body)
})

app.listen(PORT,()=>{
    "Server running"
})