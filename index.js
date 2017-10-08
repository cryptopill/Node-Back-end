const express = require('express');
var exec = require('child_process').exec;
var cors =  require('cors');
// const exec = require('child-process').exec;
// const sys =


//set up express app
const app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);



/*setInterval(function(){

}, 5000);*/


app.use(cors());

// app.use('/models', require('./models'))

//set the routes
app.use('/api', require('./routes/api'));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('updatemeds', function(socket){
  console.log('user connected');
  socket.emit('replymeds', 'hello');
})
//for running the script
/*exec("echo hi", function(err, stdout, stderr) {
  console.log(stdout);
});*/

//listening at port 8080
server.listen(process.env.port || 8080, function(){
  console.log('now listening at port 8080');
})
