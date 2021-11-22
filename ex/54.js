'use strict'
// 54.Airline:
// a. Build a data structure for an airline company. (use the create function for each 
// object). Create to following entities:
// i. A Plane. The plane will contain: 
// 1. model.
// 2. seatCount.
// ii. A passenger - tip: use createPassenger(fullName, flights)
// 1. id (7 random digits)
// 2. fullName
// 3. flights (array of pointers to the relevant flights)
// iii. A flight
// 1. date
// 2. departure
// 3. destination
// 4. plane (pointer to a plane)
// 5. passengers (array of pointers to the relevant passengers)
// b. Initialize all variables with consistent data. I.e (date should be 0 and 
// passengers should be an empty array).
// i. Create an array of 5 passengers (gPassengers is a good name) 
// ii. Create an array of 2 planes.
// iii. Create an array of 2 flights, each flight has a plane property that points 
// to a plane object, and a passengers property that points to the 
// passengers array. 
// TIP: first create a passenger with an empty flights array, and the flight with 
// an empty passengers array, then you can push the objects. 
// c. Write the functions:
// i. bookFlight(flight, passenger) - this function connects between the 
// pointers of the passengers and their flights. 
// ii. getFrequentFlyers() - returns the passengers with the maximal flights 
// count. 
// iii. checkIfFlightFullyBooked(flight) - checks if there are available seats on
// the flights, and returns true if there are. Think where would it make 
// sense to invoke it.

var gNextid = 1234567;
var gPassengers = ['Frank', 'John', 'Sarah', 'Dorin', 'Tamar'];
var modelTypes = [{ 'model': 'Boeing', 'seatCount': ['A1', 'A2', 'A3', 'B1', 'B2'] },
{ 'model': 'Turboprop Aircraft', 'seatCount': ['A1', 'A2', 'B1', 'B2'] }];
var flights = [{
    plane: modelTypes[0],
    passengers: [],
    destination: 'Hawaii',
},
{
    plane: modelTypes[1],
    passengers: [],
    destination: 'Argentina',
}]

console.log(createFlights());
function createFlights(date = 0, departure = 0, destination = 'Hawaii',
    plane = createPlane(modelTypes[0]['model'], modelTypes[0]['seatCount'],
        gPassengers)) {
    return { plane, gPassengers, flights };
}

console.log(bookFlight(0, 'Frank'));
function bookFlight(flight, passenger) {
    flight = flights[0];
    passenger = flights[0]['passengers'];
    passenger.push(gPassengers[0]);
    return { flight, passenger }
}


function createPlane(model, seatCount) {

    return {
        model,
        seatCount,
    }
}

console.log(createPassenger());
function createPassenger(id = gNextid++, fullName, flights) {
    flights = flights;
    fullName = gPassengers[1];
    return {
        gNextid,
        fullName,
        flights,
    }
}