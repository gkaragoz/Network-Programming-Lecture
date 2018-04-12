const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://127.0.0.1:27017', (err, client) => {
    if (err) return console.log(err)
    db = client.db('networkprogramming')
    app.listen(3000, () => {
      console.log('listening on 3000')
    })
})

app.get('/', (req, res) => {
    res.sendfile(__dirname + "/index.html")

    db.collection('lectures').find().toArray(function(err, results) {
        if (err) return console.log(err)
        console.log(results)
    })
})