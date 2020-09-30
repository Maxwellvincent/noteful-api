// Update with your config settings.

// This file will connect to the noteful-server database that was created.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: "postgres://localhost/noteful-server",
      timezone: 'UTC',
      dateStrings: true
    },
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
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
