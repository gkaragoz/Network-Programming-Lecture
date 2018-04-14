const mongoose = require('mongoose');

// Lecture Schema
const lectureSchema = mongoose.Schema({
	code:String,
	name:String,
	content:String
});

const Lecture = module.exports = mongoose.model('Lecture', lectureSchema,'lectures');

// Get Lecture
module.exports.getLecture = (callback) => {
	Lecture.find(callback);
}