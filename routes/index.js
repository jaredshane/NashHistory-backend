'use strict'

const { Router } = require('express')
const router = Router()
const { register, login } = require('../controllers/userCtrl')

router.get('/', (req, res) => {
  res.json({
    'hi': 'hi'
  })
})

router.post('/register', register)

module.exports = router
