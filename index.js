// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
=========Window Binding=========
The 'this' keyword defaults to the window object unless you are in strict mode ('use strict') in which case it will return undefined.

example:
cat = "meow" -> window object will return "meow" - javascript automatically declares the variable because use strict is not on

example:
'use strict';
cat = meow -> undefined - javascript does not try and correct the code because it is in strict mode

============================================================================================================================================





=========Implicit Binding=========
The 'this' keyword applies to objects with methods and refers to whatever is left of the dot when the function is invoked.
'this' has no meaning until the function is invoked

example:
const myCat = {
  name: "abby",
  meow: "meeeoow",
  cat: function() {
    console.log(this.meow) // this refers to whatever is to the left of the dot when the function is invoked below, In this case it is myCat
  }
}

myCat.cat()
============================================================================================================================================





=========Explicit Binding=========
'this' refers to whatever we explicitly tell javascript to bind it to using .call, .apply, or .bind.
.call - will immediatly invoke the function -- we pass in arguments 1 by 1
.apply - also immediatly invokes the function -- we pass in arguments as an array
.bind - does NOT immediatly invoke the function -- we pass in aguments 1 by 1. -- Returns a brand new function that can be invoked later
============================================================================================================================================

example:

function pet() {
  console.log(this.name)
} 

const myCat = {
  name: "abby",
  age: 17
}

const myDog = {
  name: "nugan",
  age: 18
}

.call -- pet.call(myCat) // Supply .call with the argument of what we want to assign 'this' to

.bind -- const newPet = pet.bind(myCat) // Creates new function and binds myCat to it

.apply() = Borrow an object's functions. Similar to call(), but pass an array in place of extra individual arguments

let classRoom = {

    takeAttendence: function(students){
        console.log(this.name,"is taking attendence");
        for(let i in students){
            console.log(students[i]);
        }
    }
}

let teacher = {
    name: "Mrs.Puff"
}

let students = ["Spongebob","Patrick","Sandy"];
students.push("Squidward");
classRoom.takeAttendence.apply(teacher, [students]);




=========New Binding=========
'this' refers to a newly created object invoked as a constructor function

example:
// passing in all attribs 1 by 1

function Food(favorite) {
  this.food = favorite;
}

const myFavFood = new Food("Mexican")
console.log(`My favorite food is ${MyFavFood.food}) // 'this' refers to the food key in the constructor function Food



example:
// passing in 1 argument

function Food(attr) {
  this.food = attr.food;
}

const myFavFood = new Food({ // an object
  food: "Mexican"
})

console.log(`My favorite food is ${myFavFood.food})

============================================================================================================================================
*/





/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person() {

}


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car() {

}


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby() {

}


/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. 
  2. 
  3. 
  4. 
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
