const mongoose = require('mongoose')

const cardSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
  bio: String
})

module.exports = mongoose.model('Cards', cardSchema)