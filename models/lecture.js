const mongoose = require('mongoose');

// Lecture Schema
const lectureSchema = mongoose.Schema({
	code:String,
	name:String,
	content:String
});

const Lecture = module.exports = mongoose.model('Lecture', lectureSchema,'lectures');

// Get Lecture
module.exports.getLecture = (id, callback) => {
	Lecture.find({no: id}, callback);
}

// Update a Lecture
module.exports.updateLecture = (id, lecture, options, callback) => {
	console.log("Processing to updateLecture...");

	var query = {no: id};
	var update = {
		code: lecture.code,
		name: lecture.name,
		content: lecture.content
	}
	Lecture.findOneAndUpdate(query, update, options, callback);
}