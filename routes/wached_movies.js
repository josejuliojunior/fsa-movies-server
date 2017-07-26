var express = require("express");
var router = express.Router();
var queries = require("../queries");
var cors = require("cors");
var app = express();

app.use(cors());


router.get("/", function(request, response, next){
  queries.getMovies().then(function(movies){
    response.json(movies);
  });
});


module.exports = router;
