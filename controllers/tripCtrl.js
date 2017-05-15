'use strict'

const { bookshelf, knex } = require('../db/database')
const Trip = require('../models/TripModel')

module.exports.getTrips = ({params: {id}}, res, next) => {
  Trip.getTripsForUser(id)
  .then((trips) => {
    res.status(200).json(trips)
  })
}
