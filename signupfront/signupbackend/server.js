const express = require('express');
const app= express();
const mongoose =require('mongoose');
const dotenv = require('dotenv')
const routeURLs = require('./routes/routes.js')
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS,function(){
    console.log("Database connected");
});

app.use(express.json());
app.use(cors());
app.use('/app', routeURLs);


app.listen(4000, function(){console.log("Listening at 4000");});