// var util = require('util')
var exec = require('child_process').exec;

// function puts(error, stdout, stderr) { util.puts(stdout) }
// exec("cd /home/olaf/Remote/Madhacks", function(err,stdout,stderr){
//   console.log('success');
// })
console.log('Starting directory ' + process.cwd());
try {
  process.chdir('/home/crypto/OpioidManagerSmartContract/');
  console.log('New directory: ' + process.cwd() + '/./go.sh');
}
catch (err) {
  console.log('chdir: ' + err);
}

//to run the bash script from node js
exec(process.cwd() + '/./go.sh', function(err, stdout, stderr) {
  console.log('hi')
  console.log(stdout);
});
