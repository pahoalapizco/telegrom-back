'use strict'

const chatModel = require('./model')

function addChat (users) {
  const chat = new chatModel(user)
  chat.save()
}

function getChats (user) {
  const filter = {
    users: user
  }

  
}

module.exports = {
  add: addChat,
  list: getChats
}
