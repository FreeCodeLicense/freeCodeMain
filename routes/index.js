const express=require("express")
const router=express.Router()

router.get("/",(req,res)=>{
    res.json({ name:"Abrorbek" })
})


module.exports=router