//mongoDB connection and server creation
const express = require('express')
const mongoose=require("mongoose");
const app = express()
const home=require("./routes/home");
const posts=require("./routes/posts");
require("dotenv").config();

//MongoDB connection 
mongoose.connect(process.env.URL_STRING, {
  useNewUrlParser: true
}).then(
  console.log("connected to db")
).catch((err)=>{
  console.log(err);
})
//middlewares
app.use(express.json());
//router middlewares
app.use("/",home);
app.use("/",posts);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
});