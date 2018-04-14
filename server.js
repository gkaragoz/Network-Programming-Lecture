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

app.get('/lecture', (req, res) => {
	Lecture.getLecture((err, lecture) => {
		if(err){
			throw err;
        }
		res.send(lecture);
	});
});

app.listen(3000);
console.log("Server online at port:3000");