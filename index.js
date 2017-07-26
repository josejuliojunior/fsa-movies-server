const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const routes = require('./routes/wached_movies')


// app.get('/', function(request, response){
//   console.log('server running');
// });

app.use('/movies', routes);






app.listen(port);
