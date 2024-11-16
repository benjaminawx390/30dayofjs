//Boolean & Date exercise Day 3


//Exercise 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

var firstName = "Ahmed";
var lastName = "Al-Mansoori";
var country = "Jordan";
var city = "Amman";
var age = 25;
var isMarried = false;
var year = 2020;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//Exercise 2
//check if typeof 10 is equal to "10"
console.log(typeof 10 === typeof parseInt("10"));

// Check if parseInt('9.8') is equal to 10
console.log(typeof parseInt('9.8') === typeof 10);

// write 3 truthy and 3 falsy statement.

//truthy
const planet = "Earth";
const scale = 10;
const lengthOfDay= "24 hours";
//checking for the values

console.log(Boolean(planet));
console.log(Boolean(scale));
console.log(Boolean(lengthOfDay));

//falsy
const dwarf = undefined;
const elmo = null;
const cookie = 0;

console.log(Boolean(dwarf));
console.log(Boolean(elmo));
console.log(Boolean(cookie));
console.log("question 5");
console.log (4>3);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4===4);
console.log(4!=4);
console.log(4!==4);
console.log(4!==4);
console.log(4!="4");
console.log(4=="4");
console.log(4==="4");

var py='python';
var notLang='jargon';

//Using ! to negate the opposite. /on/ is true on both strings.
console.log(!(/on/g.test(py)===/on/g.test(notLang)))

console.log("qn 6");

console.log(4>3 && 10<12);
console.log(4>3 && 10>12);
console.log(4>3 || 10<12);
console.log(4>3 || 10>12);
console.log(!(4>3));
console.log(!(4<3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

console.log('Qn 7');

var currentDate = new Date();
console.log(currentDate);
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.getDate());
console.log(currentDate.getDay());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());

var ms = currentDate.getTime();
console.log(ms/1000);

//Exercise lvl 2 

//Q1
let base = prompt("Enter the base of the triangle");
let height =prompt("Enter the height of the triangle");
let area = (base*height)/2;
console.log("The area is $ {area}");

//Q2
let a=prompt("What is the first side of the triangle?");
let b=prompt("What is the second side of the triangle?");
let c=prompt("What is the third side of the triangle?");
let perimeter = a+b+c;
console.log("The perimeter is ${perimeter}");

//Q3
let length = prompt("Enter the length of the rectangle");
let width = prompt("Enter the width of the rectangle");
let areaOfRectangle = length*width;
let perimeterOfRectangle = 2*(length+width);

console.log ('The area of the rectangle is ${areaOfRectangle} and the perimeter is ${perimeterOfRectangle}');

//Q4 
let radius = prompt("Enter the radius of the circle");
let areaOfCircle = Math.PI*radius*radius;
let circumferenceOfCircle = 2*Math.PI*radius;
console.log('The area of the circle is ${areaOfCircle} and the circumference is ${circumferenceOfCircle}');

//Q5
//Calculate the slope, x-intercept and y-intercept of y = 2x -2

//we'll break the equation into small parts. y = 2x - 2
// for x-intercept replace y with 0 and then solve for x. 0 = 2x - 2
// a = 0 , b = 2x, c = -2
let a = 1,
  b = 2,
  c = -2;
//let's divide everything by a to make sure we have y alone on one side of the equation.
let a1 = a / a,
  b1 = b / a,
  c1 = c / a;
//let's negate (change the sign) the value of c.
// Then add it to both a and c. a will be zero that's why we won't need a.
// Then we divide negated c1 by b1.
let x_intercept = -c1 / b1;
console.log(x_intercept);
//for y intercept let's replace x with 0 then solve for y. y = 2(x) - 2.
// y = 2 (0) - 2. b will be zero hence we don't need it. divide c1 by b1
let y_intercept = c1 / a1; // we added c because it comes with its negative and overwrites the +
console.log(y_intercept);
// for slope. Change in y over change in x.
//we can use our x and y intercepts to calculate the slope. (x,0) (0,y)
// slope will be either (y - 0)/ (0 - x) or (0 - y)/(x - 0)
// then we round of the result to 2 decimal places just in case we have floats.
let slope = Math.round(((y_intercept - 0) / (0 - x_intercept)) * 100) / 100;
let slope1 = Math.round(((0 - y_intercept) / (x_intercept - 0)) * 100) / 100;
console.log(slope);
console.log(slope1);

//Q6
//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2,
  x2 = 6,
  y1 = 2,
  y2 = 10;
let slope2 = Math.round(((y2 - y1)/ (x2 - x1)));
console.log(slope2);  


//q7 Their slope is equal

//Q8 The formula y=x^2 +6x + 9). Find the value of x when y is 0.


//Q9 
let hours = prompt("Enter the number of hours");
let rate = prompt("Enter the rate per hour");
let pay = parseFloat(hours) * parseFloat(rate);
console.log("The pay is ${pay}");

//q10
var name = prompt("Please enter your name");

if (name.length > 7){
    console.log('Your name is long');
}
else{
    console.log('Your name is shorter than 7 characters');
}
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
//use ` instead of ' 
//remember the $ string sign

let dateInfo = new Date();
let year = dateInfo.getFullYear();
let month = dateInfo.getMonth();
let day = dateInfo.getDate();
let hours = dateInfo.getHours();
let min = dateInfo.getMinutes();

console.log(`${year}-${month}-${day} ${hours}:${min}`);
console.log(`${day}-${month}-${year} ${hours}:${min}`);
console.log(`${day}/${month}/${year} ${hours}:${min}`);
