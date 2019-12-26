'use strict'

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const server = require('http').Server(app)
const cors = require('cors')

const router = require('./network/routes')
const db = require('./db')
const socket = require('./socket')
const { DB_URL, PORT, HOST } = require('./config')

db(DB_URL)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
socket.connect(server)

router(app)


app.use('/app', express.static('public'))

server.listen(PORT, function () {
  console.log(`Aplicación corriendo en el ${HOST}:${PORT}`)
})
