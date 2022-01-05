const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  name: String,
  imgUrl: String,
  bio: String
})

module.exports = mongoose.model('User', userSchema)