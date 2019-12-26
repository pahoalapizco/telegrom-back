const config = {
  DB_URL: process.env.DB_URL || 'mongodb+srv://curso:6Y9ZVx4a2oqu6ZME@cluster0-lb65t.mongodb.net/telegrom?retryWrites=true&w=majority',
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || 'http://localhost'
}

module.exports = config
