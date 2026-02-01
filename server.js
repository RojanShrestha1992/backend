const express = require('express')
const app = express()
app.get("/", (req,resp)=>{
    resp.send("helloworld")
})
app.get("/about",(req,resp)=>{
    resp.send("About page")
})
app.listen(3000)