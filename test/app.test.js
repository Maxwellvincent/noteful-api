const knex = require('../db/knex');

describe('CRUD noteful-server', () => {
    before((done) => {
        //run migrations
        knex.migrate.latest()
        .then(() => {
            //run seeds
            return knex.seed.run();
        }) .then(() => done());
    });

    it('Works...', function() {
        console.log('Its working');
    });
});