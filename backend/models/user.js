const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
require('dotenv').config()

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  name: String,
  imgUrl: String,
  bio: String
})

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) { //if password is hashed dont hash it again
    next()
  }
  const passwordSalt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, passwordSalt) //makes the keyword password = hashed password
  next()
})

userSchema.methods.checkPassword = async function(password) {
  return await bcrypt.compare(password, this.password) //<-- Users saved password hashed
}

userSchema.methods.getToken = function() { //"this" refers to the object we are calling the function on
  return JWT.sign({id: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES})
}
module.exports = mongoose.model('User', userSchema)