const User = require('../models/user')

const sign_up = async (request, response, next) => {
  const body = request.body

  const user = new User({
    email: body.email,
    password: body.password,
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

const login = async (request, response, next) => {
  const {email, password} = request.body

  if (!email || !password) {
    response.status(400).json({success: false, error: 'Email and password needed'})
  }

  try {
    const user = await User.findOne({ email }).select('+password') //<-- password refers to the "this.password"
    if (!user) {
      response.status(404).json({success: false, error: 'Invalid credentials'})
    }
    const passwordsMatch = await user.checkPassword(password)

    if(!passwordsMatch) {
      response.status(404).json({success: false, error: 'Invalid credentials'})
    }

    response.status(200).json({success: true, token: 'd243adfgf96df2ehf'})
  } catch (error) {
    response.status(500).json({success: false, error: error.message})
  }
}

module.exports = {
  sign_up, login
}