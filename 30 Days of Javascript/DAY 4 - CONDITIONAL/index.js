//Day 4 Conditional

const { default: test } = require("node:test");

//q1
var age = prompt("Enter your age:");
const requiredAge = 18;
var waitYear = requiredAge - age;

if (age>18){
  console.log('You are old enough to drive');
}
else {
  console.log('You are not old enough to drive, please wait for ' + waitYear + ' years');
}

//q2
var yourAge = prompt("Enter your age:");
var myAge = prompt("Enter my age:");

if (yourAge>myAge){
  console.log('You are older than me');
}
else if (yourAge == myAge){
  console.log('We are the same age');
}
else {
  console.log('You are younger than me');
}

//q3
//Use if-else 
//Use ternary operator
//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

let firstNumber = prompt("Enter first number:");
let secondNumber =prompt('Enter the second number');

if (firstNumber>secondNumber){
  console.log('a is bigger than b');
}
else if (secondNumber > firstNumber) {
  console.log('a is less than b');
}
else {
  console.log('a is equal to b');
}

//ternary operator
let x = 4;
let y = 3;
let result = x > y ? "4 is greater than 3" : "3 is greater than 4";
console.log(result);


//q4
var evenNumber = prompt('Enter your number');

if (evenNumber % 2 == 0){
  console.log('Your number is even');
}
else {
  console.log('Your number is not an even number');
}

//level 2 
//q1

var score = prompt('Enter your score');

if (score >= 80 && score <=100){
  console.log('You received an A grade!');
}
else if (score >= 70 && score <= 89){
  console.log('You received a B grade!');
}
else if (score >= 60 && score <= 69){
  console.log('You received a C grade!');
}
else if (score >= 50 && score <= 59){
  console.log('You received a D grade!')
}
else {
  console.log ('You failed!');
}

//q2
var month = prompt('Enter your month');

if (month == 'September' || month == 'October' || month == 'November'){
  console.log
  ('The season is autumn');
}
else if (month =='December' || month == 'January' || month == 'February'){
  console.log
  ('The season is Winter');
}
else if (month =='March' || month == 'April' || month == 'May'){
  console.log
  ('The season is Spring');
}
else if (month == 'June' || month == 'July' || month == 'August'){
  console.log
  ('The season is Summer');
}
else {
  console.log ('please enter a valid month');
}

//q3
var dayTest = prompt('Enter your day');

switch(dayTest){
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("It is a working day.");
    break;

  case "Saturday":
  case "Sunday":
    console.log("it is a weekend");
    break;
}


//q4 

function isLeap(year){
   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
          return true;
      }
      return false;
  }

function getDaysInMonth(month,year){
  const daysInMonth =[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month ===2 && isLeap(year)){
    return 29;
  }
  return daysInMonth[month - 1];
}

const month= parseInt(prompt("Enter the month (1-12)"));
const year=parseInt(prompt("Enter the year "));
const days=getDaysInMonth(month,year);
console.log(`The number of days in the month ${month} of the year ${year} is ${days}`);
