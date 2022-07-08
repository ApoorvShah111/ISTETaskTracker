const mongoose = require('mongoose');

const signUpTemplate = new mongoose.Schema({
    fullName:{
        type: String,
        requited: true
    },
    username:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        deafult:Date.now
    }
});
const exp=mongoose.model('Accounts', signUpTemplate);
//console.log(exp);
module.exports = exp;