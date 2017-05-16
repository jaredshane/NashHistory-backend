
exports.up = (knex, Promise) => {
   return knex.schema.table('users', (table) => {
     table.string('email').notNullable()
     table.string('password').notNullable()
   })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('users')
}
