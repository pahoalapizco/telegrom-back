'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const chat = new Schema({
  users: [{
    type: Schema.ObjectId,
    ref: 'User'
  }]
})

module.exports = mongoose.model('Chat', chat)
