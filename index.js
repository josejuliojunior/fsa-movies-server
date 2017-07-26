const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;
const routes = require('./routes/wached_movies')

app.use(cors());

// app.get('/', function(request, response){
//   console.log('server running');
// });

app.use('/movies', routes);






app.listen(port);
