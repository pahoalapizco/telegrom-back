'use strict'

const express = require('express')
const multer = require('multer') // Ayuda a gestionar archivos para subir al svr
const uuid = require('uuid')
const path = require('path')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

// Configuración de almacenamiento en svr
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/files/')
  },
  filename: function(req, file, cb) {
    cb(null, uuid.v4() + path.extname(file.originalname))
  }
 })
 
const upload = multer({ storage })

router.get('/', function(req, res) {
  const { user } = req.query

  controller.getMessages(user)
    .then(messages =>  response.success(req, res, messages, 201))
    .catch(e => response.error(req, res, e, 400))
})

router.post('/', upload.single('file'), function(req, res) {
  const { user, message, chat } = req.body
  const file = req.file
  console.log(path.extname(file.originalname))
  controller.addMessage(user, message, chat, file)
    .then(fullMessage =>  response.success(req, res, fullMessage, 201))
    .catch(e => response.error(req, res, e, 500))
})

router.patch('/:id', function(req, res) {
  const { id } = req.params
  const { message } = req.body
  controller.updateMessages(id, message)
    .then(updatedMessaje => response.success(req, res, updatedMessaje))
    .catch(e => response.error(req, res, e))
})

router.delete('/:id', function(req, res) {
  const { id } = req.params
  controller.deleteMessage(id)
    .then(() => response.success(req, res, 'Mensaje eliminado correctamente.'))
    .catch(e => response.error(req, res, e))
})

module.exports = router
