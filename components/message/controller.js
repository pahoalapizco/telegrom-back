'use strcit'
const store = require('./store')

function addMessage (user, message) {
  return new Promise((resolve, reject) => {
    if(!user || !message) {
      console.error('[message:controller]: Faltam datos!!.')
      reject('Los datos son iconrrectos.')
      return false
    }

    const fullMessage = {
      user,
      message,
      date: new Date()
    }

    store.add(fullMessage)
    resolve(fullMessage)
  })
}

function getMessages (filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser || null))
  })
}

function updateMessages (id, message) {
  return new Promise(async (resolve, reject) => {
    if(!id || !message) {
      console.error('[message:controller]: Faltan datos!!.')
      reject('No hay mensaje para almacenar.')
      return false
    }
    const updatedMessage = await store.update(id, message)
    resolve(updatedMessage)
  })
}

function deleteMessage (id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Id del mensaje no valido')
      return false
    }

    store.delete(id)
      .then(() => resolve('Mensaje eliminado correctamente.'))
      .catch(e => reject(e))
  })
}

module.exports = {
  addMessage,
  getMessages,
  updateMessages,
  deleteMessage
}