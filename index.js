const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/public/html'))


app.listen('8080', () => console.log('work'))