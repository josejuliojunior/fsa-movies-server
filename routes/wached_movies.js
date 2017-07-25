var express = requeire("express");
var router = express.Router();
var queries = require("../queries");

router.get("/", function(request, response, next){
  queries.getMovies().the(function(movies){
    response.json(movies);
  });
});
