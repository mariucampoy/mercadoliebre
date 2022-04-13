const express = require("express")
const path = require("path")

let app = express()

app.use(express.static(path.resolve(__dirname, "./public")))

app.listen(3002, () => console.log("Corriendo servidor en: http://localhost:3002"))

app.get("/", (req,res)=> {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})

app.get("/register", (req,res)=> {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})

app.post("/register", (req,res)=> {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})

app.get("/login", (req,res)=> {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})

app.post("/login", (req,res)=> {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})