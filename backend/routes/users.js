const userRouter = require('express').Router()
const Users = require('../models/user')

//API ENDPOINTS FOR USERS
userRouter.post('/', async (request, response) => {
  const body = request.body
  console.log(body)

  const user = new Users({
    name: body.name,
    imgUrl: body.imgUrl,
    bio: body.bio
  })

  try {
    const saved_user = await user.save()
    response.json(saved_user)
  } catch {
    response.status(400).send()
  }
})

userRouter.get('/', async (request, response) => {
  const users = await Users.find({})
  response.json(users.map(user => user.toJSON()))
})

module.exports = userRouter