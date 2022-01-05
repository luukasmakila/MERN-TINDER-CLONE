const userRouter = require('express').Router()
const User = require('../models/user')

//API ENDPOINTS FOR USERS
userRouter.get('/', async (request, response) => {
  const users = await User.find({})
  response.json(users.map(user => user.toJSON()))
})

module.exports = userRouter