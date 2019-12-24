'use strict'

const chatModel = require('./model')

function addChat (chat) {
  const newChat = new chatModel(chat)
  return newChat.save()
}

function getChats (user) {
  const filter = {
    users: user
  }

  const chats = chatModel.find(filter).populate('users')
  return chats
}

module.exports = {
  add: addChat,
  list: getChats
}
