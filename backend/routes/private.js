const express = require('express')
const privateRouter = express.Router()
const { getUser, getUsers } = require('../controllers/private')
const {protect} = require('../middlewares/auth')

privateRouter.route('/users').get(protect, getUsers)
privateRouter.route('/user').get(protect, getUser)

module.exports = privateRouter