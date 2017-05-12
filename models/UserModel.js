'use strict'
const { knex, bookshelf } = require('../db/database');
const bcrypt = require('bcryptjs')

const User = bookshelf.Model.extend({
  tableName: 'users'
}, {
  // method for registering new user
 createUser: (req, res, next) => {
  //  console.log('req', req.body.password, req.body.email)
   const salt = bcrypt.genSaltSync()
   const hash = bcrypt.hashSync(req.body.password, salt)
  //  console.log('hash', hash)
   return knex('users')
   .insert({
     email: req.body.email,
     password: hash
   })
   .returning('*')
 },

  getUser: (email) => {
    // console.log('email', email)
    return knex('users').where({email}).first()
  },

  comparePass: (userPassword, databasePassword) => {
    // console.log(userPassword, databasePassword)
    const bool = bcrypt.compareSync(userPassword, databasePassword)
    if (!bool) throw new Error('password does not match')
    else return true
  }
})



module.exports = User;
