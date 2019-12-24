const userModel = require('./model')

function addUser(user) {
  const newUser = new userModel(user)
  newUser.save()
}

function getUsers (name) {
  let filter = {}
  if (name !== null) {
    filter = {
      name
    }
  }

  const users = userModel.find(filter)
  return users
}

module.exports = {
  add: addUser,
  list: getUsers
}