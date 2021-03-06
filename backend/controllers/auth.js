const User = require('../models/user')

const sign_up = async (request, response, next) => {
  const body = request.body
  console.log(body)

  const user = new User({
    email: body.email,
    password: body.password,
    name: body.name,
    imgUrl: body.imgUrl,
    bio: body.bio
  })

  try {
    await user.save()
    sendToken(user, 201, response)
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
      console.log('no users with that email')
      return response.status(404).json({success: false, error: 'Invalid credentials'})
    }
    
    const passwordsMatch = await user.checkPassword(password)
    if(!passwordsMatch) {
      console.log('passwords do not match')
      return response.status(404).json({success: false, error: 'Invalid credentials'})
    }

    sendToken(user, 200, response)
  } catch (error) {
    response.status(500).json({success: false, error: error.message})
  }
}

const sendToken = (user, statusCode, response) => {
  const token = user.getToken()
  const id = user._id.toString()
  response.status(statusCode).json({success: true, token, id})
}

module.exports = {
  sign_up, login
}