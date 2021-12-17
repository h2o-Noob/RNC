const http = require('http');
const fs = require('fs')
const hostname = '127.0.0.1';
const port = 3000;
const express = require("express")
const app = express()
var path = require("path")

app.use(express.static(path.join(__dirname)))

app.get("/", (req, res)=>{
  res.sendFile(__dirname + '/romCon.html')
})

app.get("/currency", (req, res)=>{
  res.sendFile(__dirname + '/currency.html')
})

app.listen(port, ()=>{
  console.log("hi")
})