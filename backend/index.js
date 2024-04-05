// importing the express
const express =require('express')

const employeesModel = require("./model")

const cors = require('cors')
// 2.initialization
const app = new express()

// middleware || parsing the parameter
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

// 3.api creation
app.get('/',(req,res)=>{
    res.send("This message is from the server")
})

app.get('/abhi',(req,res)=>{
    res.send("This message from abhi")
})

app.get('/trial',(req,res)=>{
    res.send("This message is a trial message")
})

app.get('/data',(req,res)=>{
    res.json({"name":"abhi","age":20})
})

// api for adding data

app.post('/create',async(req,res)=>{
    var result = await new employeesModel(req.body)
    result.save()
    res.send("Data Added") 
})
// api for viewing data

app.get('/view',async(req,res)=>{
    var data = await employeesModel.find()
    res.json(data)
    console.log(data)
})
// api for deleting data

app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params)
    let id = req.params.id
    await employeesModel.findByIdAndDelete(id)
    res.send("delete") 

})
// api for ubdateing
app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id
    await employeesModel.findByIdAndUpdate(id,req.body)
    res.send("data updated")
})
// 4.port   
app.listen(3005,()=>{
    console.log("port 3005 is up and running")
})