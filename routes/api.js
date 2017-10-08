const express = require('express');
const router = express.Router();
var bodyParser =  require('body-parser');

//const io = require('socket.io-client');
const io2 = require('socket.io-client');

//var socket = io('http://localhost:8080');

// const io = require('socket.io-client');
//const io2 = require('socket.io-client');

// var socket = io('http://localhost:8080');

var socket2 = io2('http://0.0.0.0:8000');
// socket.emit(s)

/*socket.on('updatemeds', function(data){
  console.log(data)
})*/

//const io = require('socket.io')(app);
var Patient =  require('../models/Patient.js')
var Medicine = require('../models/Medicine.js')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//server.listen(3000);
// io.on('updatemeds', function(socket){
//   console.log('io waiting');
//   socket.emit('replymeds', 'hello');
// })



var singleAddress = []
//function to make sure an address cannot be used twice
/*function preventDuplicate(var address){
  for(i = 0 ; i < singleAddress.length ; i++){
    if(singleAddress[i] === address){
      return false;
    }
  }
  return true;
}*/

function getRandomAddress() {
	let addr = Date.now() + Math.ceil(5000*Math.random())
	addr = addr.toString().substring(0, 10)
	addr = "0x" + addr
	return addr
}

//array of Patients
var Patients = []
var Patients = [
  {
    address: getRandomAddress(),
    name: "Space Man",
    num_prescriptions: 5,
    medicines: [{
      name: "Opioids",
<<<<<<< HEAD
      patientAddress: getRandomAddress(),
      medAddress: getRandomAddress(),
      doi: "10.8/2017",
      capsules: 10,
=======
      patientAddress: "0x243294715",
      medAddress: "0x34b940321",
      doi: "9/5/2017",
      capsules: 8,
>>>>>>> 1095a462e2845ae6dca9bc2da01941823583ef1d
      density: 5,
      distributed: true
    },
    {
<<<<<<< HEAD
      name: "Opioids",
      patientAddress: getRandomAddress(),
      medAddress: getRandomAddress(),
      doi: "10.8/2017",
      capsules: 10,
      density: 5,
      distributed: true
    },{
      name: "Opioids",
      patientAddress: getRandomAddress(),
      medAddress: getRandomAddress(),
      doi: "10.8/2017",
      capsules: 10,
      density: 5,
=======
      name: "Theophylline",
      patientAddress: "0x243294715",
      medAddress: "0x34b940321",
      doi: "6/9/2017",
      capsules: 5,
      density: 4,
      distributed: false
    },{
      name: "Dilitiazem",
      patientAddress: "0x243294715",
      medAddress: "0x34b940321",
      doi: "15/8/2017",
      capsules: 3,
      density: 6,
>>>>>>> 1095a462e2845ae6dca9bc2da01941823583ef1d
      distributed: true
    }]
  },
  {
    address: getRandomAddress(),
    name: "Spider Man",
    num_prescriptions: 4,
    medicines: [{
<<<<<<< HEAD
      name: "Opioids",
      patientAddress: getRandomAddress(),
      medAddress: getRandomAddress(),
      doi: "10.8/2017",
      capsules: 10,
      density: 5,
      distributed: true
    },
    {
      name: "Opioids",
      patientAddress: getRandomAddress(),
      medAddress: getRandomAddress(),
      doi: "10.8/2017",
      capsules: 10,
=======
      name: "Lithium",
      patientAddress: "0x243294715",
      medAddress: "0x34b940321",
      doi: "10/8/2017",
      capsules: 14,
      density: 2,
      distributed: true
    },
    {
      name: "Mesalazine",
      patientAddress: "0x243294715",
      medAddress: "0x34b940321",
      doi: "20/8/2017",
      capsules: 7,
>>>>>>> 1095a462e2845ae6dca9bc2da01941823583ef1d
      density: 5,
      distributed: true
    },{
      name: "Opioids",
<<<<<<< HEAD
      patientAddress: getRandomAddress(),
      medAddress: getRandomAddress(),
      doi: "10.8/2017",
      capsules: 10,
      density: 5,
=======
      patientAddress: "0x243294715",
      medAddress: "0x34b940321",
      doi: "12/8/2017",
      capsules: 9,
      density: 7,
>>>>>>> 1095a462e2845ae6dca9bc2da01941823583ef1d
      distributed: true
    }]
  },{
    address: getRandomAddress(),
    name: "Super Man",
    num_prescriptions: 3,
    medicines: [{
<<<<<<< HEAD
      name: "Opioids",
      patientAddress: getRandomAddress(),
      medAddress: getRandomAddress(),
      doi: "10.8/2017",
=======
      name: "Nifedipine",
      patientAddress: "0x243294715",
      medAddress: "0x34b940321",
      doi: "10/8/2017",
>>>>>>> 1095a462e2845ae6dca9bc2da01941823583ef1d
      capsules: 10,
      density: 5,
      distributed: true
    },
    {
<<<<<<< HEAD
      name: "Opioids",
      patientAddress: getRandomAddress(),
      medAddress: getRandomAddress(),
      doi: "10.8/2017",
=======
      name: "Lithium",
      patientAddress: "0x243294715",
      medAddress: "0x34b940321",
      doi: "10/8/2017",
>>>>>>> 1095a462e2845ae6dca9bc2da01941823583ef1d
      capsules: 10,
      density: 5,
      distributed: true
    },{
      name: "Opioids",
<<<<<<< HEAD
      patientAddress: getRandomAddress(),
      medAddress: getRandomAddress(),
      doi: "10.8/2017",
=======
      patientAddress: "0x243294715",
      medAddress: "0x34b940321",
      doi: "10/8/2017",
>>>>>>> 1095a462e2845ae6dca9bc2da01941823583ef1d
      capsules: 10,
      density: 5,
      distributed: true
    }]
  }
]


//temp Schema for LocalPatient
var LocalPatient = {
  address: getRandomAddress(),
  name: "Space Man",
  num_prescriptions: 5,
  medicines: []
}

//temp Schema for prescription
var Prescription = {
  name: "Opioids",
<<<<<<< HEAD
  patientAddress: getRandomAddress(),
  medAddress: getRandomAddress(),
  doi: "10.8/2017",
=======
  patientAddress: "0x243294715",
  medAddress: "0x243294715",
  doi: "10/8/2017",
>>>>>>> 1095a462e2845ae6dca9bc2da01941823583ef1d
  capsules: 10,
  density: 5,
  distributed: true
}

//for storing medicines
var medicines = []



//get request for prescription
router.get('/getPrescription', function(req,res,next){

  // res.send('hello');
})

//post request for prescription
router.post('/updatePrescription', urlencodedParser, function(req,res,next){
  // console.log(req.body);
  socket2.emit('createPre', req.body)

  res.send('success');
})

//post request for registering prescription
router.post('/registerPrescription', urlencodedParser, function(req,res,next){
  console.log(req.body);



  //check if medAddress already exists for patientAddress
  socket2.emit('registerPre', req.body);


  //check if medAddress already exists for patientAddress
  socket2.emit('registerPre', req.body);

  res.send(JSON.stringify({result : true}));
})



var names = ['Super', 'Spider', 'Bat']

//get request for all the users
router.get('/allusers', function(req,res,next){

  /*socket2.emit('getAllUsers', 'hello');
  socket2.on('patientlists', function(data){
    // console.log(data);
    res.send(data);
  })*/

  var count = 5;
  var medicinesArr = [];
  var tempCount = 0;
  for(j = 0 ; j < 3 ; j++){
    for(i = 0 ; i < count; i++){
      Medicine = Prescription;
      medicinesArr[i] =  Medicine;
    }
    count -= 1;
    // console.log(count);
    LocalPatient.medicines =  medicinesArr;
    var deepClone = JSON.parse(JSON.stringify(LocalPatient))
    Patient = deepClone;
    Patient.name = names[tempCount++];
    medicinesArr =  []
    Patients.push(Patient);


  }

  res.send(Patients);
})



module.exports = router;
