const mongoose = require('mongoose');
const Schema = mongoose.Schema


const assignTaskSchema = new Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, ref:'User', require:true},
    task:{type:String, require:true},
    date:{type:Date, default:Date.now}
    
    
},{timestamps:true})

const assignTask = mongoose.model('AssignTask', assignTaskSchema)

module.exports = assignTask;

