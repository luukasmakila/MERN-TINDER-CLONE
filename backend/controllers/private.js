const User = require('../models/user')
const JWT = require('jsonwebtoken')

exports.getUsers = async (request, response, next) => {
  const users = await User.find({})
  response.json(users.map(user => user.toJSON()))
}

exports.getUser = async (request, response, next) => {
  response.json(request.user.toJSON())
}