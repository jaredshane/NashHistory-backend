'use strict'

const { knex, bookshelf } = require('../db/database')
require('./UserModel')

const Journal = bookshelf.Model.extend({
  tableName: 'journal',
  user: function() { return this.belongsToMany('User')}
}, {
  getEntriesForUser: (id) => {
    return Journal.where({user_id: id})
    .fetchAll()
    .then(rows => rows)
  },
  addEntry: (body) => {
    return Journal.forge(body)
    .save()
    .then(entry => entry)
  }
})

module.exports = Journal
