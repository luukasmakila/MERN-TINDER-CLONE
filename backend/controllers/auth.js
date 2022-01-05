const User = require('../models/user')
const bcrypt = require('bcrypt')

const sign_up = async (request, response, next) => {
  const body = request.body

  const passwordSalt = 10
  const passwordHash = await bcrypt.hash(body.password, passwordSalt)

  const user = new User({
    email: body.email,
    password: passwordHash,
    name: body.name,
    imgUrl: body.imgUrl,
    bio: body.bio
  })

  try {
    await user.save()
    response.status(201).json({success: true, user})
  } catch (error) {
    response.status(500).json({success: false, error: error.message})
  }
}

const login = (request, response, next) => {
  response.send('login route')

  try {
    
  } catch (error) {
    
  }
}

module.exports = {
  sign_up, login
}