'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const message = new Schema ({
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  message: {
    type: String,
    require: true
  },
  date: Date
})

module.exports = mongoose.model('Message', message)
