const User = require('../models/user')

exports.getUsers = async (request, response, next) => {
  const users = await User.find({})
  response.json(users.map(user => user.toJSON()))
}