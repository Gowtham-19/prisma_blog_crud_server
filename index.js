const express = require("express")
const cookieParser = require('cookie-parser')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//cookie middleware
app.use(cookieParser())
const userRoutes = require("./routes/userRoutes")
const postRoutes = require("./routes/postRoutes")

app.use("/api",userRoutes)
app.use("/post",postRoutes)

app.get("/",(req,res) => {
    res.send("server is up")
})


app.listen(process.env.PORT,()=> {
    console.log("server is running",process.env.PORT)
})