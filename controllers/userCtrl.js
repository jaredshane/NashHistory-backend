'use strict'

const User = require('../models/UserModel')
const { bookshelf, knex } = require('../db/database')


module.exports.register = (req, res, next) => {
  User.createUser(req)
  .then((user) => {
    res.status(201).json({
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

module.exports.login = (req, res, next) => {
  const email = req.body.email
  const password = req.body.password
  User.getUser(email)
  .then((response) => {
    User.comparePass(password, response.password)
    return response
  })
  .then( (resp) => {
    res.status(200).json(resp)
  })
}
