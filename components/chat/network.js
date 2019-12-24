'use strict'

const express = require('express')
const controller = require('./controller')
const response = require('../../network/response')

const router = express.Router()

router.get('/:user', function(req, res) {
  const { user } = req.params
  controller.getChats(user)
    .then(chats => response.success(req, res, chats))
    .catch(e => response.error(req, res, 'Ocurrio un error inesperado', 500, e))
})

router.post('/', function(req, res) {
  const { users } = req.body
  controller.addChat(users)
    .then(chat => response.success(req, res, chat, 201))
    .catch(e => response.error(req, res, 'Error inesperado', 500, e))
})

module.exports = router
