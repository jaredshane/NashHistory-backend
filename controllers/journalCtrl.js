'use strict'

const { bookshelf, knex } = require('../db/database')
const Journal = require('../models/JournalModel')

module.exports.getJournalEntries = ({params: {id}}, res, next) => {
  Journal.getEntriesForUser(id)
  .then((entries) => {
    res.status(200).json(entries)
  })
}

module.exports.saveJournalEntry = ({body}, res, next) => {
  Journal.addEntry(body)
  .then((entry) => {
    res.status(201).json(entry)
  })
}
