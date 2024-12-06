const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const usrSchema = new Schema({
    name:{type:String, required:true, unique:true},
    email:{type:String, required:true, unique:true},
    phone:{type:Number, required:true},
    address:{type:String, required:true},
    role:{type:String, enum: ['admin', 'employee'], require:true},
    password:{type:String, required:true}
    
})

const User= mongoose.model('User', usrSchema);

module.exports  = User