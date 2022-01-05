const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const userRouter = require('./controllers/users')
const cors = require('cors')

//APP CONFIG
const app = express()
const PORT = process.env.PORT || 3001
const MONGO_URL = process.env.MONGO_URL

//MIDDLEWARES
app.use(express.json())
app.use(cors())

//DB CONFIG
console.log('connecting to the db')
mongoose.connect(MONGO_URL)
  .then(result => {
    console.log('connected to the db')
  })
  .catch(error => {
    console.log('failed to connect to the db')
})

app.use('/users', userRouter)

//LISTENER
app.listen(PORT, () => {
  console.log(`listening on localhost ${PORT}`)
})