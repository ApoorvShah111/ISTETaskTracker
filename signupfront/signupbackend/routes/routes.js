const express = require('express');
const router = express.Router();
//const mongoose = require('mongoose');
const signUpTemplateCopy = require('../models/SignUpModels.js');

router.post('/signup',function(req,res){
    const signedUpUser =new signUpTemplateCopy({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    //console.log(signedUpUser);
    signedUpUser.save()
    .then(data =>{
        res.json(data);
        console.log(data);
    })
    .catch(error =>{
        console.log(error);
        res.json(error)
    })
    //res.send('send');
});
module.exports= router;