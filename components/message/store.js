'use strict'

const modelMessage = require('./model')

function addMessage (message) {
  const myMessage = new modelMessage(message)
  myMessage.save()
}

function getMessages (filterUser) {
  let filter = {}
  if (filterUser !== null) {
    filter = { user: filterUser }
  }
  const myMessages = modelMessage.find(filter)
                        .populate('user', 'name')
                        .populate('chat')
  return myMessages
}

function updateMessage (_id, message) {
  const updatedMessage = modelMessage.updateOne({ _id }, { message: message }, { new: true })
  return updatedMessage
}

function deleteMessage (_id) {
  return modelMessage.deleteOne({ _id })
}

module.exports = {
  add: addMessage,
  list: getMessages,
  update: updateMessage,
  delete: deleteMessage
}
