const JWT = require('jsonwebtoken')
const User = require('../models/user')
require('dotenv').config()

const protect = async (request, response, next) => {
  let token
  console.log(request.headers.authorization)

  if (request.headers.authorization && request.headers.authorization.startsWith('Bearer')) {
    //Token looks like -> Bearer s84g20fhgdfs80ty67gs31bo1
    token = request.headers.authorization.split(' ')[1]
  }

  if (!token) {
    response.status(401).json({success: false, error: 'Access unauthorized'})
    next()
  }

  try {
    const decodedToken = JWT.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decodedToken.id)

    if (!user) {
      response.status(404).json({success: false, error: 'No users with this id'})
      next()
    }

    request.user = user //sets current user to the request.user parameter
    next()
  } catch (error) {
    response.status(401).json({success: false, error: 'Unauthorized access'})
    next()
  }
}

module.exports = {
  protect
}