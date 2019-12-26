'use strict'

const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.get('/', function(req, res) {
  const { user } = req.query

  controller.getMessages(user)
    .then(messages =>  response.success(req, res, messages, 201))
    .catch(e => response.error(req, res, e, 400))
})

router.post('/', function(req, res) {
  const { user, message, chat } = req.body
  controller.addMessage(user, message, chat)
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
