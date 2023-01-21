const express=require('express');
const app=express();
const model=require("../model/model");
const mongoose=require("mongoose");

app.use(express.json());
const posts=express.Router();
mongoose.set('strictQuery', false);
posts.get("/posts",async(req,res)=>{
    const allPosts=await model.find({});
    try{
        res.send(allPosts);
    }catch(error){
        console.log(error);
    }
    }
)
posts.get("/posts/:id",async(req,res)=>{
    const singlePost=await model.findOne({"title": req.params.id})
    try{
        res.send(singlePost);
    }catch(error){
        console.log(error);
    }
    }
)
posts.post("/posts",async(req,res)=>{

 const newPost=new model({
    title:req.body.title,
    description:req.body.description,
    content:req.body.content
   })
   try{
    const userPost=await newPost.save();
    return res.status(201).json(userPost);
   }catch(error){
    return res.status(500).json(error)
   }
})
posts.patch("/posts",async(req,res)=>{ 
      try{
        const updatedDoc = await model.updateOne({ title:req.body.title }, { description:"this means alot to me and my family" });
        return res.status(200).json(updatedDoc);
    }catch(error){
       return res.status(500).json(error)
      }
   })
   posts.delete("/posts",async(req,res)=>{ 
    try{
        const deltedDoc=await model.deleteMany({});
        return res.status(200).json(deltedDoc);
    }catch(error){
     return res.status(500).json(error);
    }
 })
module.exports=posts;