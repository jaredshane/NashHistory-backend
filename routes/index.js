'use strict'

const { Router } = require('express')
const router = Router()
const { register, login } = require('../controllers/userCtrl')
const { getTrips, saveTrips } = require('../controllers/tripCtrl')
const { getJournalEntries, saveJournalEntry } = require('../controllers/journalCtrl')

router.get('/', (req, res) => {
  res.json({
    'hi': 'hi'
  })
})

router.post('/register', register)
router.post('/login', login)
router.get('/trip/:id', getTrips)
router.post('/trip', saveTrips)
router.post('/journal', saveJournalEntry)
router.get('/journal/:id', getJournalEntries)

module.exports = router
