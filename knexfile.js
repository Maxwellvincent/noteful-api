// Update with your config settings.

// This file will connect to the noteful-server database that was created.

module.exports = {

  development: {
    client: 'pg',
    connection: "postgres://localhost/noteful-server",
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  test: {
    client: 'pg',
    connection: "postgres://localhost/test-noteful-server",
  }

};
