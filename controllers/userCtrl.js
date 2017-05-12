'use strict'

const User = require('../models/UserModel')
const { bookshelf, knex } = require('../db/database')


module.exports.register = (req, res, next) => {
  User.createUser(req)
  .then((user) => {
    res.status(200).json({
      status: 'success',
      user: user
    })
  })
  .catch((err) => {
    res.status(500).json({
      status: 'error'
    })
  })
}
