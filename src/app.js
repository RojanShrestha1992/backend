const express = require("express")
const noteModel = require("./models/note.model")

const app  = express()
app.use(express.json());

app.post("/notes",async (req,res)=>{
    const data = req.body
   await noteModel.create({
        title:data.title,
        description:data.description
    })
    res.status(201).json({
        message: "note created"
    })
})

app.get("/notes", async(req,res)=>{

    // noteModel.fnd() // return a array of object
//    const notes =  await noteModel.findOne({
//     title: "test_title"
//    }) //return an object

const notes =  await noteModel.find({
    // title: "test_title"
   }) 


   res.status(200).json({
    message: "notes fetched successfully",
    notes: notes
   })
})

app.delete("/notes/:id", async(req,res)=>{
    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id:id
    })
    res.status(200).json({
        message:"deleted successfully"
    })
})
app.patch("/notes/:id", async(req,res)=>{
    const id = req.params.id
    const description = req.body.description
    await noteModel.findOneAndUpdate({
        _id : id
    }, {
        description : description
    })
    res.status(200).json({
        message:"updated successfully"
    })
})

module.exports = app