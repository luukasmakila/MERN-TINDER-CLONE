const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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
module.exports = mongoose.model('User', userSchema)