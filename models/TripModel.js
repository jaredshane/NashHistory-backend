'use strict'

const { knex, bookshelf } = require('../db/database')
require('./UserModel')

const Trip = bookshelf.Model.extend({
  tableName: 'site_for_trip',
  user: function() { return this.belongsToMany('User') }
}, {
  getTripsForUser: (id) => {
    return Trip.where({user_id: id})
    .fetchAll()
    .then((rows) => {
      return rows
    })
  },
  addTrip: (body) => {
    return Trip.forge(body)
    .save()
    .then(trip => trip)
  }
})

module.exports = Trip
