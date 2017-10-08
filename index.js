const express = require('express');
var exec = require('child_process').exec;
var cors =  require('cors');
// const exec = require('child-process').exec;
// const sys =


//set up express app
const app = express();

app.use(cors());

// app.use('/models', require('./models'))

//set the routes
app.use('/api', require('./routes/api'));

//for running the script
exec("echo hi", function(err, stdout, stderr) {
  console.log(stdout);
});

//listening at port 8080
app.listen(process.env.port || 8080, function(){
  console.log('now listening at port 8080');
})
