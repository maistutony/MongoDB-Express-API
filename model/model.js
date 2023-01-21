const mongoose= require("mongoose");

const PostSchema=mongoose.Schema(
    {
        title:String,
        description:String,
        content:String
    }
);

//create the athiBlog model instance then export it to routes folder
module.exports=mongoose.model("AthiBlog",PostSchema);