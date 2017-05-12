
exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('users', (table) => {
    table.increments()
  })
  .createTableIfNotExists('site_for_trip', (table) => {
    table.increments()
  })
  .createTableIfNotExists('journal', (table) => {
    table.increments()
  })
};

exports.down = (knex, Promise) => {
 return knex.schema.dropTableIfExists('journal').dropTableIfExists('site_for_trip').dropTableIfExists('users')
};
