const express = require('express');



//set up express app
const app = express();


//set the routes
app.use('/api', require('./routes/api'));


//listening at port 8080
app.listen(process.env.port || 8080, function(){
  console.log('now listening at port 8080');
})
