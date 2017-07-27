var express = require("express");
var queries = require("../queries");
var knex = require('../db/knex');
var router = express.Router();


router.get("/", function(request, response, next){
  queries.getMovies().then(function(movies){
    response.json(movies);
  });
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  queries.getOneMovie(id)
    .then(movies =>{
      res.json(movies);
    });
});

router.post('/', (req, res) =>{
  let post = req.body;
  queries.postOneMovie(post)
    .then(movies => {
      res.json(movies)
    });
});

router.put('/:id', (req, res) =>{
  let id = req.params.id;
  let edit = req.body;
  knex('wached_movies').where('id',id)
    .update(edit)
    .returning('*')
    .then(edited => {
      res.json(edited)
    });
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;
  queries.deleteOneMovie(id)
    .then( deleted => {
      res.json({
        message: 'Record Deleted',
        deleted: deleted
      });
    });
});





module.exports = router;
