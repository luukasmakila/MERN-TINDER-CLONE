const User = require('../models/user')
const JWT = require('jsonwebtoken')

exports.getUsers = async (request, response, next) => {
  const users = await User.find({})
  response.json(users.map(user => user.toJSON()))
}

exports.getUser = async (request, response, next) => {
  console.log(request.headers.authorization)
  token = request.headers.authorization.split(' ')[1]
  const decodedToken = JWT.verify(token, process.env.JWT_SECRET)
  const user = await User.findById(decodedToken.id)
  response.json(user.toJSON())
}