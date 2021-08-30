require("dotenv").config()
const app=require("../index")

app.listen(process.env.APP_PORT || 3000,()=>{
    console.log("Server started")
})