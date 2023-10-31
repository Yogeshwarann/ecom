const port=process.env.PORT || 3000;
const cors=require("cors");
const express=require('express');
const conne= require('./data/connection');
const routesP= require('./data/routesP'); 
const routesU=require('./data/routesU');
const routesB=require('./data/routesB');
const bodyParser = require('body-parser')
conne(); 
const app=express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use('/p',routesP);
app.use('/u',routesU);
app.use('/b',routesB);
app.use('/uploads', express.static('uploads')); 
app.listen(port,()=>{
    console.log("Serve list");
}); 