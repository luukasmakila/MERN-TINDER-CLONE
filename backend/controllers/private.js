const User = require('../models/user')
const JWT = require('jsonwebtoken')

exports.getUsers = async (request, response, next) => {
  const users = await User.find({})
  response.json(users.map(user => user.toJSON()))
}

exports.getUser = async (request, response, next) => {
  response.json(request.user.toJSON())
}

exports.changeUser = async (request, response, next) => {
  console.log(request.body)
  try {
    const user = await User.findByIdAndUpdate(request.user._id, request.body)
    response.json(user.toJSON())
  } catch (error) {
    response.status(404).json({success: false})
  }
}