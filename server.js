const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))

MongoClient.connect('mongodb://127.0.0.1:27017', (err, client) => {
    if (err) return console.log(err)
    db = client.db('networkprogramming') // whatever your database name is
    app.listen(3000, () => {
      console.log('listening on 3000')
    })
})

// app.post('/exampleID', (req, res) => {
//     console.log(req.body)
// })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')

    db.collection('lectures').find().toArray(function(err, results) {
        console.log(err);
        console.log(results);
    })
})