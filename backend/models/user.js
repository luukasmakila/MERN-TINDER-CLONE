const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
  bio: String
})

module.exports = mongoose.model('Users', userSchema)