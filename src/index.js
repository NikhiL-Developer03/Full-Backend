// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// require('dotenv').config({path:'./env'}) //As early as possible in your application, import and configure dotenv
// import express from "express";
// const app = express();

import dotenv from "dotenv"
import connectDB from './db/index.js'
dotenv.config({path:"./env"})

connectDB();








/*
// approch first Database connect on same file
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    app.on("error",(e)=>{
      console.log(e);
      throw error
    })
    app.listen(process.env.PORT,()=>{
      console.log(`APP is running on port ${process.env.PORT}`
    })
  }catch(error){
    console.error("Error : ",error);
    throw err
  }
})();
*/

