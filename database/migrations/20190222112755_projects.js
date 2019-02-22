
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name').notNullable().unique();
      tbl.string('description').notNullable().unique();
      tbl.boolean('completed').notNullable();
      tbl.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
