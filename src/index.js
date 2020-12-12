const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const mongo = require('./utils/mongo.js');


app.use(cors());

app.use((req,res, next)=>{
    req.io = io;
    return next();
})

// app.use(express.json())

app.use(require('./utils/routes'))

var porta = process.env.PORT || 8080;
// var porta = 80;

server.listen(porta, ()=>{
    console.log(`Server Inicializado na porta ${porta}`)
})