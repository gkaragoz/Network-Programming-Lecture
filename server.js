const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

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
    db.collection('lectures').find().toArray(function(err, results) {
        if (err) return console.log(err)
        // renders index.ejs
        res.render('index.ejs', {content: results})
    })
})