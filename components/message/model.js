'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const message = new Schema ({
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  chat: {
    type: Schema.ObjectId,
    ref: 'Chat',
    require: true
  },
  message: {
    type: String,
    require: true
  },
  file: String,
  date: Date
})

module.exports = mongoose.model('Message', message)
