
exports.up = function(knex, Promise) {
  return knex.schema.createTable('wached_movies',
  (table)=>{
    table.increments();
    table.text('name').notNullable().unique();
    table.float('rate').notNullable();
    table.text('description');
    table.text('type');
    table.integer('duration');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableexists('wached_movies');
};
