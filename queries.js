const knex = require('./connection');

module.exports = {
  getMovies: function(){
  return knex('wached_movies')
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
