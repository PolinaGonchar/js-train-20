/*
 * Constructor function: Vehicle
 * Properties:
 * --------------------------------------
 * | Arguments    |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 */

// Creating the constructor function Vehicle.
function Vehicle(brand, model, year, mileage) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
}

Vehicle.toString = function () {
  return `${this.brand} ${this.model} (${this.year})`;
};
Vehicle.valueOf = function () {
  return this.mileage;
};

// valueOf is a method that JavaScript uses to convert an object to a primitive value.
// We override it here to return this.mileage.

/*
 * Constructor function: Car
 * Properties:
 * ----------------
 * | Property     |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 * | fuelType     |
 * | speed        |
 */

// Creating Car - another constructor that inherits properties and methods from Vehicle using the apply function.
function Car(brand, model, year, mileage, fuelType, speed) {
  Vehicle.apply(this, [brand, model, year, mileage]);
  this.fuelType = fuelType;
  this.speed = speed;
}

// We can override methods from Vehicle in Car.
Car.prototype.toString = function () {
  return `${this.brand} ${this.model} (${this.year}) - ${this.fuelType}`;
};
// Creating the accelerate method for Car prototype, 
// increases this.speed by the passed number and outputs the message to the console: The car <brand> <model> accelerated to <speed> km/h.
Car.prototype.accelerate = function (increment) {
  this.speed += increment;
  console.log(
    `The car ${this.brand} ${this.model} accelerated to ${this.speed} km/h`
  );
};
// Creating the brake method for Car prototype, 
// decreases this.speed by the passed number and outputs the message to the console: The car <brand> <model> slowed down to <speed> km/h.
Car.prototype.brake = function (decrement) {
  this.speed -= decrement;
  console.log(
    `The car ${this.brand} ${this.model} slowed down to ${this.speed} km/h`
  );
};
// Creating a new instance of the Car object.
/*
 * Object Instance: Car
 * Properties:
 * --------------------------------------
 * | Property     |  Value              |
 * |--------------|---------------------|
 * | brand        |  "Audi"             |
 * | model        |  "A6"               |
 * | year         |  2018               |
 * | mileage      |  30000              |
 * | fuelType     |  "Petrol"           |
 * | speed        |  0                  |
 */
let car = new Car("Audi", "A6", 2018, 30000, "Petrol", 0);
console.log(car.toString());
console.log(car.valueOf());
car.accelerate(50);
car.brake(20);

/*
 * Constructor function: Truck
 * Properties:
 * --------------------
 * | Property         |
 * |------------------|
 * | brand            |
 * | model            |
 * | year             |
 * | mileage          |
 * | color            |
 * | engineType       |
 * | towingCapacity   |
 * | fuelType         |
 * | transmissionType |
 * | doors            |
 * | weight           |
 */

// Truck constructor inherits from Vehicle by calling it within the constructor using call.
function Truck(
  brand,
  model,
  year,
  mileage,
  color,
  engineType,
  towingCapacity,
  fuelType,
  transmissionType,
  doors,
  weight
) {
  Vehicle.call(this, brand, model, year, mileage);
  this.color = color;
  this.engineType = engineType;
  this.towingCapacity = towingCapacity;
  this.fuelType = fuelType;
  this.transmissionType = transmissionType;
  this.doors = doors;
  this.weight = weight;
}

// Additional tow method for Truck prototype, takes a number and if it exceeds towingCapacity, logs the message: The load is too heavy to tow, otherwise logs Towing the load...
Truck.prototype.tow = function (weight) {
  if (weight > this.towingCapacity) {
    console.log("The load is too heavy to tow.");
  } else {
    console.log("Towing the load...");
  }
};

// Creating a new instance of the Truck object.
/*
 * Object Instance: myTruck
 * Properties:
 * ---------------------------------------------------
 * | Property        | Value                        |
 * |-----------------|------------------------------|
 * | brand           | "Toyota"                     |
 * | model           | "Tundra"                     |
 * | year            | 2019                         |
 * | mileage         | 20000                        |
 * | color           | "Red"                        |
 * | engineType      | "V8"                         |
 * | towingCapacity  | 10000                        |
 * | fuelType        | "Gasoline"                   |
 * | transmissionType| "Automatic"                  |
 * | doors           | 4                            |
 * | weight          | 5600                         |
 */
let myTruck = new Truck(
  "Toyota",
  "Tundra",
  2019,
  20000,
  "Red",
  "V8",
  10000,
  "Gasoline",
  "Automatic",
  4,
  5600
);
// Calling the tow method with a weight below towingCapacity
myTruck.tow(900);
// Calling the tow method with a weight above towingCapacity
myTruck.tow(11000);
// Adding a drive method for the Car prototype, increases mileage by kilometers (the passed number), and logs Traveling <kilometers> kilometers in <brand> <model>.
Car.prototype.drive = function (kilometers) {
  this.mileage += kilometers;
  console.log(
    `Traveling ${kilometers} kilometers in ${this.brand} ${this.model}.`
  );
};
// Using bind to bind the drive method to the specific car object.
// This creates a new function with this permanently set to car, regardless of how the function is called.
// Calling the function with a value of 100.
let driveCar = car.drive.bind(car);
driveCar(100);

/*
 * Constructor function: ElectricCar
 * Properties:
 * --------------------------------------
 * | Property        |
 * |-----------------|
 * | brand           |
 * | model           |
 * | year            |
 * | mileage         |
 * | batteryCapacity |
 */

function ElectricCar(brand, model, year, mileage, batteryCapacity) {
  if (!new.target) {
    throw new Error("Constructor must be called with 'new'");
  }
  Car.call(this, brand, model, year, mileage);
  this.batteryCapacity = batteryCapacity;
}

// Overriding toString for the ElectricCar prototype to return <brand> <model> <year> - Battery: <batteryCapacity> kWh.
ElectricCar.prototype.toString = function () {
  return `${this.brand} ${this.model} (${this.year}) - Battery: ${this.batteryCapacity}kWh`;
};

// Creating a new instance of the ElectricCar object.
/*
 * Object Instance: ElectricCar
 * Properties:
 * --------------------------------------
 * | Property        | Value             |
 * |-----------------|-------------------|
 * | brand           | Tesla             |
 * | model           | Model S           |
 * | year            | 2020              |
 * | mileage         | 10000             |
 * | batteryCapacity | 100               |
 */
let tesla = new ElectricCar("Tesla", "Model S", 2020, 10000, 100);
console.log(tesla.toString());
