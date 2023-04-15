//2//
alert("Lahno");

//3//
let x;
let y;

x = 7;
y = "Hello";

alert(x);
alert(y);

x = y;

alert(x);
alert(y);

//4//
let myObject = {
    myString: "Hello world",
    myNumber: 7,
    myBoolean: true,
    myUndefined: undefined,
    myNull: null
  };

//5//
let isAdult = confirm("Ви досягли повнолітнього віку?");
console.log(isAdult);

//6//
let firstName = "Eduard";
let lastName = "Lahno";
let group = "JS";
let yearOfBirth = 1999;
let isMarried = false;

console.log(typeof yearOfBirth, yearOfBirth);
console.log(typeof isMarried, isMarried);
console.log(typeof firstName, lastName, group);

let nullVariable = null;
let undefinedVariable;

console.log(typeof nullVariable, nullVariable);
console.log(typeof undefinedVariable, undefinedVariable);

//7//
let email = prompt("Please enter your email:");
let password = prompt("Please enter your password:");

let message = `Dear User, your email is ${email}, your password is ${password}.`;
alert(message);

//8//
const secInMin = 60;
const secInHour = secInMin * 60;
const secInDay = secInHour * 24;
const secInMonth = secInDay * 30;

alert(`Seconds in an hour: ${secInHour}\nSeconds in a day: ${secInDay}\nSeconds in a month: ${secInMonth}`);
