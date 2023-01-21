const express=require('express')
const home=express.Router()
home.get("/",(req,res)=>{
    res.send("<h1>my home page<h1>");
})
module.exports=home;