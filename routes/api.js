const express = require('express');
const router = express.Router();
var bodyParser =  require('body-parser');
var Patient =  require('../models/Patient.js')
var Medicine = require('../models/Medicine.js')

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

var LocalPatient = {
  address: "0x243294715",
  name: "Space Man",
  num_prescriptions: 5,
  medicines: []
}

var Prescription = {
  name: "Weed",
  patientAddress: "0x243294715",
  medaddress: "0x243294715",
  doi: "1/1/1111",
  capsules: 10,
  density: 5,
  distributed: true
}

var medicines = []

//get request for prescription
router.get('/getPrescription', function(req,res,next){

  res.send('hello');
})

//post request for pills
router.post('registerPill', function(req,res,next){
  res.send('success');
})

//get request for all the users
router.get('/allusers', function(req,res,next){
  // Patient.name = "Spider Man";
  // var count = 0;
  for(j = 0 ; j < 3 ; j++){
    for(i = 0 ; i < 3 ; i++){
      Medicine = Prescription;
      LocalPatient.medicines[i] =  Medicine;
    }

    Patient = LocalPatient;
    Patients.push(Patient);

    // LocalPatient.medicines.length = 0;
    // for(k = 0 ; k < 3 ; k++){
    //   LocalPatient.medicines.pop()
    // }
  }
  // LocalPatient.medicines = []

  res.send(Patients);
})



module.exports = router;
