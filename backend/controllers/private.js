const User = require('../models/user')

exports.getPrivate = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      data: "You got access to the private data in this route",
    })
}

exports.getUsers = async (request, response, next) => {
  const users = await User.find({})
  response.json(users.map(user => user.toJSON()))
}