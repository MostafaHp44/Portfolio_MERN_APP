const express =require('express')
const mongoose=require('mongoose')
const dotenv= require('dotenv')
const app =express()
const cors=require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const ContactModel = require("./Model/model")





app.get("/home", cors(), async (req, res) => {
	res.send("This is the data for the home page")
})

app.post("/post", (req, res)=>{
   let newcontact =new ContactModel({
    FullName:req.body.FullName,
    Email:req.body.Email,
    Subject:req.body.Subject,
    Massage:req.body.Massage
   })
   newcontact.save()
   res.sendStatus(200)
})




dotenv.config({
    path:'./config.env',
})


mongoose.connect(process.env.MyURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{console.log('DataBase is connect.....!')}).catch((err)=>{console.log(err)})

app.listen(4000,()=>{console.log('Server is Running...!!')})
