'use strict'

const db = require('mongoose')

db.Promise = global.Promise

// 'mongodb+srv://curso:6Y9ZVx4a2oqu6ZME@cluster0-lb65t.mongodb.net/telegrom?retryWrites=true&w=majority'
async function connect (url) {
  await db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log('[db]: Base de datos conectada con éxito.')
}


module.exports = connect