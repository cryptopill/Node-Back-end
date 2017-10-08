const express = require('express');
const router = express.Router();
var bodyParser =  require('body-parser');


var users = {
  address: "0x243294715",
  name: "Space Man",
  num_prescriptions: 5,
  medicines: ['med1', 'med2', 'med3']
}
//get request for prescription
router.get('/prescription', function(req,res,next){
  res.send('hello');
})

//post request for pills
router.post('registerPill', function(req,res,next){
  res.send('success');
})

//get request for all the users
router.get('/allusers', function(req,res,next){

  res.send(users);
})


module.exports = router;
