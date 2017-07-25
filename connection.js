const enviroment = process.env.NODE_ENV || 'development';
const knex = require('knex');
const dbconfig = (require('.knexfile')[enviroment]);

module.exports = knex(dbconfig);
