// Making an instance of knex here which 
const knex = require('knex');
const config = require('../knexfile');
const {NODE_ENV} = require('../src/config');
const environmentConfig = config[NODE_ENV];

const connection = knex(environmentConfig);


module.exports = connection;