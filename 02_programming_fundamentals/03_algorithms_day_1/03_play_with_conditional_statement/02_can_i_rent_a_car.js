// Do not pay attention to this line for the moment
const driverData = require("./.driver_data");

// These are the variables against which you should test
// driverLicense is a string with the kind of license (ex: AM, B, D...)
const driverLicense = driverData.driverLicense;
// licenceIssued is an integer with the year it was issued (ex: 2001)
const licenseIssued = driverData.licenseIssued;
// numberOfAccident is an integer with the number of accidents.
const numberOfAccident = driverData.numberOfAccident;
// bonus is a float that represent the driver's bonus
const bonus = driverData.bonus;

// Write a program that will write a variable canRentACar who will answer the question, can the driver rent a car using the following rules:
//
// the driver has (at least) a B;
// driver has been licensed for at least 2 years;
// they must never have had any accidents or have re-achieved a bonus of 0.7.

// Assign a boolean to this variable:
//   `true` if the driver can rent a car
//   `false` if not
let canRentACar;

// Your code here:
if ((numberOfAccident === 0 || bonus >= 0.7) && driverLicense >= "B" && (licenseIssued < 2018 - 2)) {
  canRentACar = true;
} else {
  canRentACar = false;
}
