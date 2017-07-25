const knex = require('./connection');

module.exports = {
  getMovies: function(){
  return knex('movies')
  .select('wached_movies.name','wached_movies.rate','wached_movies.description','wached_movies.type','wached_movies.duration');
  }
};
