'use stric'

const store = require('./store')

function addUser(name) {
  return new Promise((resolve, reject) => {
    if (!name || name === '') {
      reject('Falta capturar el nombre de usuario')
      return false
    }
    const user = {
      name
    }
    store.add(user)
    resolve(user)
  })
}

function getUsers (name) {
  return new Promise((resolve, reject) => {
    resolve(store.list(name || null))
  })
}

module.exports = {
  addUser,
  getUsers
}