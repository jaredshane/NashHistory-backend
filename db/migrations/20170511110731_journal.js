
exports.up = (knex, Promise) => {
  return knex.schema.table('journal', (table) => {
    table.string('entry', 1000)
    table.string('photo_url')
    table.integer('user_id').notNullable().unsigned().references('users.id')
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('journal')
};
