const express = require('express')
const privateRouter = express.Router()
const { getPrivate, getUsers } = require('../controllers/private')
const { protect } = require('../middlewares/auth')

//privateRouter.route("/").get(protect, getPrivate)
privateRouter.route('/users').get(getUsers) //if JWT is not passed the function wont call "Next()"

module.exports = privateRouter