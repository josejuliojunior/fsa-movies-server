exports.seed = function(knex, Promise){
  return knex.raw('DELETE FROM "wached_movies"; ALTER SEQUENCE wached_movies_id_seq RESTART WITH 6;')

  .then(function(){
    var wached_movies = [{
      id: 1,
      name: 'Saving Private Ryan',
      rate: 8.6,
      description: 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
      type: 'Drama, War',
      duration: 169
    },{
      id: 2,
      name:'Cast Away',
      rate: 7.7,
      description: 'A FedEx executive must transform himself physically and emotionally to survive a crash landing on a deserted island.',
      type: 'Adventure, Drama',
      duration: 143
    },{
      id: 3,
      name: 'Forrest Gump',
      rate: 8.8,
      description: 'While not intelligent, Forrest Gump has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him.',
      type: 'Comedy, Drama, Romance',
      duration: 142
    },{
      id: 4,
      name: 'Captain Phillips',
      rate: 7.8,
      description: 'The true story of Captain Richard Phillips and the 2009 hijacking by Somali pirates of the U.S.-flagged MV Maersk Alabama, the first American cargo ship to be hijacked in two hundred years.',
      type: 'Biography, Drama, Thriller',
      duration: 122
    },{
      id: 5,
      name: 'The Terminal',
      rate: 7.3,
      description: 'An eastern immigrant finds himself stranded in JFK airport, and must take up temporary residence there.',
      type: 'Comedy, Drama, Romance ',
      duration: 128
    }];
    return knex('wached_movies').insert(wached_movies);
  });
};
