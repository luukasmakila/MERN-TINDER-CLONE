const express = require('express')
const privateRouter = express.Router()
const { getUser, getUsers } = require('../controllers/private')

privateRouter.route('/users').get(getUsers)
privateRouter.route('/user').get(getUser)

module.exports = privateRouter