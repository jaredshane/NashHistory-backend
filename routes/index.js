'use strict'

const { Router } = require('express')
const router = Router()
const { register, login } = require('../controllers/userCtrl')
const { getTrips } = require('../controllers/tripCtrl')

router.get('/', (req, res) => {
  res.json({
    'hi': 'hi'
  })
})

router.post('/register', register)
router.post('/login', login)
router.get('/trip/:id', getTrips)

module.exports = router
