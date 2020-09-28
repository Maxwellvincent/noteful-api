
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('folders', (table) => {
      table.increments('id').primary();
      table.string('name');
    }),

    knex.schema.createTable('notes', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.date('date');
      table.text('content');
      table.integer("folderId").unsigned()
      table.foreign("folderId").references('folders.id');
    })

  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('notes'),
    knex.schema.dropTable('folders')
    
  ]); 
};
