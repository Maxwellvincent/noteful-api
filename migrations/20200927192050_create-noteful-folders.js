
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('folders', (table) => {
      table.increments('id').primary();
      table.text('name');
    }),

    knex.schema.createTable('notes', (table) => {
      table.increments('id').primary();
      table.text('name');
      table.date('date');
      table.integer("folderID").unsigned().references('folders.id');
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('folders'),
    knex.schema.dropTable('notes')
  ]); 
};
