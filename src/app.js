import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express(); //through method trasnfer allProperties

// cors configration
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials:true
}))

// handle data from different place 

app.use(express.json({limit:"16kb"}))

app.use(express.urlencoded({limit:"16kb",extended:true}))

app.use(express.static("public"))

// crud operation on cookies
app.use(cookieParser())

export {app}