'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const router = require('./network/routes')
const db = require('./db')

db('mongodb+srv://curso:6Y9ZVx4a2oqu6ZME@cluster0-lb65t.mongodb.net/telegrom?retryWrites=true&w=majority')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

router(app)


app.use('/app', express.static('public'))

app.listen(3000)
console.log('Aplicación corriendo en el puerto 3000')
