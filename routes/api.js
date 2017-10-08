const express = require('express');
const router = express.Router();

var bodyParser =  require('body-parser');


var Patients = [
  {
    address: "0x243294715",
    name: "Space Man",
    num_prescriptions: 5,
    medicines: [{
      name: "Weed",
      patientAddress: "0x243294715",
      medAddress: "0x34b940321",
      capsules: 10,
      density: 5,
      distributed: true
    },
    {
      name: "Weed",
      patientAddress: "0x243294715",
      medAddress: "0x34b940321",
      capsules: 10,
      density: 5,
      distributed: true
    },{
      name: "Weed",
      patientAddress: "0x243294715",
      medAddress: "0x34b940321",
      capsules: 10,
      density: 5,
      distributed: true
    }]
  },
  {
    address: "0x243294715",
    name: "Spider Man",
    num_prescriptions: 5,
    medicines: [{
      name: "Weed",
      patientAddress: "0x243294715",
      medAddress: "0x34b940321",
      capsules: 10,
      density: 5,
      distributed: true
    },
    {
      name: "Weed",
      patientAddress: "0x243294715",
      medAddress: "0x34b940321",
      capsules: 10,
      density: 5,
      distributed: true
    },{
      name: "Weed",
      patientAddress: "0x243294715",
      medAddress: "0x34b940321",
      capsules: 10,
      density: 5,
      distributed: true
    }]
  },{
    address: "0x243294715",
    name: "Super Man",
    num_prescriptions: 5,
    medicines: [{
      name: "Weed",
      patientAddress: "0x243294715",
      medAddress: "0x34b940321",
      capsules: 10,
      density: 5,
      distributed: true
    },
    {
      name: "Weed",
      patientAddress: "0x243294715",
      medAddress: "0x34b940321",
      capsules: 10,
      density: 5,
      distributed: true
    },{
      name: "Weed",
      patientAddress: "0x243294715",
      medAddress: "0x34b940321",
      capsules: 10,
      density: 5,
      distributed: true
    }]
  }
]

var Patient = {
  address: "0x243294715",
  name: "Space Man",
  num_prescriptions: 5,
  medicines: ['med1', 'med2', 'med3']
}

var Prescription = {
  name: "Weed",
  address: "0x243294715",
  capsules: 10,
  density: 5,
  distributed: true
}
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
  res.send(Patients);
})



module.exports = router;
