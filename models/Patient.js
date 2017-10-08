// var Medicine = require('Medicine.js');
Medicine = {
  name: "string",
  patientAddress: "string",
  medAddress: "string",
  capsules: "number",
  density: "number",
  distributed: "boolean"
}

Patient = {
  address: "string",
  name: "string",
  num_prescriptions: "number",
  medicines: [],
}

// var sth = Patient.medicines;
// sth.push(Medicine);
// console.log(Patient)

module.exports = Patient;
