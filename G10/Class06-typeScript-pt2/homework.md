# Vehicle Management System

## Requirements:

### Define an abstract class Vehicle with the following properties:

- id: unique id (private)
- registrationNumber: A unique registration number for each vehicle (protected)
- make: Make of the vehicle (e.g., Toyota, Boeing).
- model: Model of the vehicle (e.g., Camry, 747).
- yearOfProduction: Year of manufacture of the vehicle.
- price: price of the vehicle
- abstract method: calculateDeprecation()

* Implement getter for id.

### Define two subclasses of Vehicle:

- Car: Represents a car.
- Plane: Represents an airplane.


Both subclasses should have additional properties and methods:

**For Car class:**

- numberOfDoors: Number of doors for the car.
- calculateDeprecation(): (current year - yearOfProduction) \* 10% of the price.
- drive(): A method specific to cars to simulate driving.
- Implement a getter and setter for registration number(4 characters long).

**For Plane class:**

- numberOfEngines: Number of engines for the plane.
- calculateDeprecation(): (current year - yearOfProduction) \* 15% of the price
- takeOff(): A method specific to planes to simulate taking off.
- Implement a getter and setter for registration number(6 characters long).

Implement a method displayDetails() in both subclasses that displays the details of the vehicle (registration number, make, model, year, price, color, and any other relevant information).
