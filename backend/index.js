const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const Cards = require('./models/dbCards')
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

//API ENDPOINTS
app.get('/', (request, response) => {
  response.status(200).send('Hello world')
})

app.post('/cards', (request, response) => {
  const cards = request.body
  console.log(cards)

  Cards.create(cards, (error, data) => {
    if (error) {
      response.status(500).send(error)
    } else {
      response.status(201).send(data)
    }
  })
})

app.get('/cards', (request, response) => {
  Cards.find((error, data) => {
    if (error) {
      response.status(500).send(error)
    } else {
      response.status(200).send(data)
    }
  })
})

//LISTENER
app.listen(PORT, () => {
  console.log(`listening on localhost ${PORT}`)
})