//server create garam
const express = require("express")
const app = express()

app.use(express.json())
// note ={
//     title: "first note"
//     desc: "dfrist desc"
// }

const notes = []
   
app.post('/notes',(req,res)=>{
// console.log(req.body)
notes.push(req.body)
res.status(201).json({
    message:"note created successfully"
})
})

app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"notes fetced successfully",
        notes: notes
    })
})


app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index
    delete notes[index]
    res.status(200).json({
        message:"note deleted"
    })
})
app.patch("/notes/:index",(req,res)=>{
    const index = req.params.index
    const description  = req.body.description
    notes[index].description = description

    res.status(200).json({
        message:"note updated"
    })
})

module.exports = app