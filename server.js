'use strict'

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const server = require('http').Server(app)

const router = require('./network/routes')
const db = require('./db')
const socket = require('./socket')

db('mongodb+srv://curso:6Y9ZVx4a2oqu6ZME@cluster0-lb65t.mongodb.net/telegrom?retryWrites=true&w=majority')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

socket.connect(server)

router(app)


app.use('/app', express.static('public'))

server.listen(3000, function () {
  console.log('Aplicación corriendo en el http://localhost:3000')
})
