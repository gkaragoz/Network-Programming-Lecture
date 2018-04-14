const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var path = require('path');

app.use("/",express.static(path.join(__dirname, 'public')));
app.use("/css",express.static(path.join(__dirname, '/css')));
app.use("/js",express.static(path.join(__dirname, '/js')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/networkprogramming');
var db = mongoose.connection;

Lecture = require('./models/lecture');

app.get('/FillContent', (req, res) => {
	Lecture.getLecture((err, lecture) => {
		if(err){
			throw err;
		}
		console.log(JSON.stringify(lecture));
		res.send(lecture);
	});
});

app.get('/GetJSON', (req, res) => {
	// Get JSON
});

app.get('/GetXML', (req, res) => {
	// Get XML
});

app.post('/OnKeyUpCode', (req, res) => {
	// Post OnKeyUpCode
});

app.post('/OnKeyUpName', (req, res) => {
	// Post OnKeyUpName
});

app.post('/OnKeyUpCodeContent', (req, res) => {
	// Post OnKeyUpCodeContent
});


app.listen(3000);
console.log("Server online at port:3000");