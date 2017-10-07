const express = require('express');
const router = express.Router();
var bodyParser =  require('body-parser');

//get request for prescription
router.get('/prescription', function(req,res,next){
  res.send('hello');
})

//post request for pills
router.post('registerPill', function(req,res,next){
  res.send('success');
})


module.exports = router;
