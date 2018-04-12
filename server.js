const express = require('express')
const bodyParser= require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function() {
    console.log('listening on 3000')
})

// app.post('/exampleID', (req, res) => {
//     console.log(req.body)
// })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})