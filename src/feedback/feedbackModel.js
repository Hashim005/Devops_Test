const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    feedback:{type:String, require:true},
    date:{type:Date, default:Date.now}
});

const Feedback = mongoose.model('Feedback', feedbackSchema)

module.exports = Feedback