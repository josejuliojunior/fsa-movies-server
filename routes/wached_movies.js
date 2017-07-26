var express = require("express");
var router = express.Router();
var queries = require("../queries");

router.get("/", function(request, response, next){
  queries.getMovies().then(function(movies){
    response.json(movies);
  });
});


module.exports = router;
