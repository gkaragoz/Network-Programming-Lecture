const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var path = require('path');
var lectureID = -1;
var studentID = "g140910034";

app.use("/",express.static(path.join(__dirname, 'public')));
app.use("/css",express.static(path.join(__dirname, '/css')));
app.use("/js",express.static(path.join(__dirname, '/js')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/networkprogramming');
var db = mongoose.connection;

Lecture = require('./models/lecture');

function SetLectureID() {
	lectureID = parseInt(studentID[studentID.length-1]);
}

app.get('/FillContent', (req, res) => {
	Lecture.getLecture(lectureID, (err, lecture) => {
		if(err) throw err;

		console.log("Received data from Database: " + JSON.stringify(lecture, "", 2));
		res.json(lecture);
	});
});

app.get('/GetJSON', (req, res) => {
	// Get JSON
	Lecture.getLecture(lectureID, (err, lecture) => {
		if(err) throw err;

		res.json(lecture);
	});
});

app.get('/GetXML', (req, res) => {
	// Get XML
	Lecture.getLecture(lectureID, (err, lecture) => {
		if(err) throw err;

		//CONVERT JSON to XML

		res.send(lecture);
	});
});

app.put('/OnKeyUp', (req, res) => {
	// Put OnKeyUp
	var lecture = req.body;
	console.log("REQUEST: " + JSON.stringify(lecture, "", 2));

	Lecture.updateLecture(lectureID, lecture, {}, (error, response) => {
		if(error) {
			console.log(console.log(JSON.stringify(error)));
			throw error;
		}
		console.log("updateLecture SUCCESS!");
		res.json(response);
	});
});

app.listen(3000);
console.log("Server online at port:3000");
SetLectureID();