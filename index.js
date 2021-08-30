require("dotenv").config()
const express=require("express")
const bodyParser=require("body-parser")
const cors=require("cors")
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))
app.use(cors({ optionsSuccessStatus:200 }))

//routes
const indexRoutes=require("./routes/index")
app.use(indexRoutes)

module.exports=app
