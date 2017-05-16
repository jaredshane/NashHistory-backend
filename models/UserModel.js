'use strict'
const { knex, bookshelf } = require('../db/database');
const bcrypt = require('bcryptjs')
require('./TripModel')

const User = bookshelf.Model.extend({
  tableName: 'users',
  trip: function() { return this.belongsToMany('Trip')}
}, {
  // method for registering new user
 createUser: (req, res, next) => {
   const salt = bcrypt.genSaltSync()
   const hash = bcrypt.hashSync(req.body.password, salt)
   return knex('users')
   .insert({
     email: req.body.email,
     password: hash
   })
   .returning('*')
 },

  getUser: (email) => {
    return knex('users').where({email}).first()
  },

  comparePass: (userPassword, databasePassword) => {
    const bool = bcrypt.compareSync(userPassword, databasePassword)
    if (!bool) throw new Error('password does not match')
    else return true
  }
})



module.exports = User;
