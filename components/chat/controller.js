'use strict'

const store = require('./store')

function addChat (users) {
  if (!users || !Array.isArray(users)) {
    return Promise.reject('Usuarios no validos')
  }

  const chat = {
    users
  }

  return store.add(chat)
}

function getChats (user) {
  if(!user) {
    return Promise.reject('No se envio un usuario correcto.')
  }

  return store.list(user)
}

module.exports = {
  addChat,
  getChats
}