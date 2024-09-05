

const express = require ("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to my First node programm!!");
})

app.get("/home",(req,res)=>{
    res.send("<h2>Welcome to my home page</h2>");
})

let port = 8080;
app.listen(port,()=>{
    console.log(`server is running:${port}`)
})


