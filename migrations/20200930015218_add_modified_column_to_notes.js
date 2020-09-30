
exports.up = function(knex) {
  return Promise.all([
    knex.schema.table('notes', (notes) => {
        notes.datetime('modified').defaultTo(knex.fn.now());
    })
  ]);
    
};

exports.down = function(knex) {
    return Promise.all([
        knex.schema.table('notes', (notes) => {
            notes.dropColumn('modified');
        })
      ]);
};
