'use strict'

const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.get('/', function(req, res) {
  const { name } = req.query
  
  controller.getUsers(name)
    .then(users => response.success(req, res, users))
    .catch(e => response.error(req, res, 'A ocurrido un error', 500, e))
})

router.post('/', function(req, res) {
  const { name } = req.body
  console.log('name', name)

  controller.addUser(name)
    .then(newUser => response.success(req, res, newUser, 201))
    .catch(e => response.error(req, res, 'Ocurrio un error', 500, e))
})

module.exports = router
