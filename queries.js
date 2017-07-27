const knex = require('./connection');

module.exports = {
  getMovies: function(){
  return knex('wached_movies')
  .select('wached_movies.name','wached_movies.rate','wached_movies.description','wached_movies.type','wached_movies.duration');
  },
  getOneMovie: function(id){
    return knex('wached_movies')
      .where('id', id).first();
  },
  postOneMovie: function(post){
    return knex('wached_movies').insert(post)
        .returning('*');
  },
  deleteOneMovie: function(id){
    return knex('wached_movies')
      .where('id',id).del();
  }
};
