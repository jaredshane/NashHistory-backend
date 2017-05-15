'use strict'

const { bookshelf, knex } = require('../db/database')
const Trip = require('../models/TripModel')

module.exports.getTrips = ({params: {id}}, res, next) => {
  Trip.getTripsForUser(id)
  .then((trips) => {
    res.status(200).json(trips)
  })
}

module.exports.saveTrips = ({body}, res, next) => {
  Trip.addTrip(body)
  .then((trip) => {
    res.status(201).json(trip)
  })
}
