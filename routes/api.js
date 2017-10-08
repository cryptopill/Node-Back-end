const express = require('express');
const router = express.Router();
var bodyParser =  require('body-parser');
const io = require('socket.io-client');
const io2 = require('socket.io-client');

var socket = io('http://localhost:8080');
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


//array of Patients
var Patients = []
// var Patients = [
//   {
//     address: "0x243294715",
//     name: "Space Man",
//     num_prescriptions: 5,
//     medicines: [{
//       name: "Weed",
//       patientAddress: "0x243294715",
//       medAddress: "0x34b940321",
//       doi: "1/1/1111",
//       capsules: 10,
//       density: 5,
//       distributed: true
//     },
//     {
//       name: "Weed",
//       patientAddress: "0x243294715",
//       medAddress: "0x34b940321",
//       doi: "1/1/1111",
//       capsules: 10,
//       density: 5,
//       distributed: true
//     },{
//       name: "Weed",
//       patientAddress: "0x243294715",
//       medAddress: "0x34b940321",
//       doi: "1/1/1111",
//       capsules: 10,
//       density: 5,
//       distributed: true
//     }]
//   },
//   {
//     address: "0x243294715",
//     name: "Spider Man",
//     num_prescriptions: 5,
//     medicines: [{
//       name: "Weed",
//       patientAddress: "0x243294715",
//       medAddress: "0x34b940321",
//       doi: "1/1/1111",
//       capsules: 10,
//       density: 5,
//       distributed: true
//     },
//     {
//       name: "Weed",
//       patientAddress: "0x243294715",
//       medAddress: "0x34b940321",
//       doi: "1/1/1111",
//       capsules: 10,
//       density: 5,
//       distributed: true
//     },{
//       name: "Weed",
//       patientAddress: "0x243294715",
//       medAddress: "0x34b940321",
//       doi: "1/1/1111",
//       capsules: 10,
//       density: 5,
//       distributed: true
//     }]
//   },{
//     address: "0x243294715",
//     name: "Super Man",
//     num_prescriptions: 5,
//     medicines: [{
//       name: "Weed",
//       patientAddress: "0x243294715",
//       medAddress: "0x34b940321",
//       doi: "1/1/1111",
//       capsules: 10,
//       density: 5,
//       distributed: true
//     },
//     {
//       name: "Weed",
//       patientAddress: "0x243294715",
//       medAddress: "0x34b940321",
//       doi: "1/1/1111",
//       capsules: 10,
//       density: 5,
//       distributed: true
//     },{
//       name: "Weed",
//       patientAddress: "0x243294715",
//       medAddress: "0x34b940321",
//       doi: "1/1/1111",
//       capsules: 10,
//       density: 5,
//       distributed: true
//     }]
//   }
// ]


//temp Schema for LocalPatient
var LocalPatient = {
  address: "0x243294715",
  name: "Space Man",
  num_prescriptions: 5,
  medicines: []
}

//temp Schema for prescription
var Prescription = {
  name: "Weed",
  patientAddress: "0x243294715",
  medAddress: "0x243294715",
  doi: "1/1/1111",
  capsules: 10,
  density: 5,
  distributed: true
}

//for storing medicines
var medicines = []



//get request for prescription
router.get('/getPrescription', function(req,res,next){
  res.send('hello');
})

//post request for prescription
router.post('/updatePrescription', urlencodedParser, function(req,res,next){
  console.log(req.body);
  socket2.emit('questions', [1,2,3])
  res.send('success');
})

//post request for registering prescription
router.post('/registerPrescription', urlencodedParser, function(req,res,next){
  console.log(req.body);
  res.send('success');
})



var names = ['Super', 'Spider', 'Bat']

//get request for all the users
router.get('/allusers', function(req,res,next){
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
