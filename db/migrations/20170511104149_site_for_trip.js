
exports.up = (knex, Promise) => {
  return knex.schema.table('site_for_trip', (table) => {
    table.string('latitude').notNullable()
    table.string('longitude').notNullable()
    table.string('title').notNullable()
    table.string('subtitle', 1000)
    table.string('number').notNullable()
    table.string('location').notNullable()
    table.integer('user_id').notNullable().unsigned().references('users.id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('site_for_trip')
}
