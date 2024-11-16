import {countries} from './countries.js';
import {webTechs} from './web_techs.js';


//Exercise Level 2

//q1
//Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// q2
let text = 'I love teaching and empowering people. I teach HTML, CSS , JS, React, Python.';
let textArray=text.split(/[,\s]+|[\s]/);
console.log(textArray);

// q3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');


//Q3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat'); //adding in the beginning
shoppingCart.push('Sugar'); //adding in the back of array

console.log(shoppingCart.indexOf('Honey')); //accessing honey index
shoppingCart.splice(4,1);//deleting honey from array


console.log(shoppingCart.indexOf('Tea'));
shoppingCart[shoppingCart.indexOf('Tea')]='Green Tea'; //accessing the indexof 'tea' to modify the element.

console.log(shoppingCart);

//Q4
// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
// If it does not exist add to the countries list.



if (countries.includes('Ethiopia')) {
    console.log('Ethiopia is inside the list');
}
else{
    console.log('Ethiopia is not inside the country list');
    countries.push('Ethiopia');
}

console.log(countries.includes('Ethiopia')); //checking if it is inside.

// q5
// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. 
// If it does not exist add Sass to the array and print the array.

console.log(webTechs.includes('Sass'));

if (webTechs.includes('Sass')){
    console.log('Sass is inside the array');
}
else {
    console.log('Sass is not inside the array');
    webTechs.push('Sass');
}

console.log(webTechs.includes('Sass'));
console.log(webTechs);

// q6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack= frontEnd.concat(backEnd);

console.log(fullStack);


//Exercise Level 3

//q1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort(); //sort the age in ascending first
console.log(ages);

const min = ages[0];
const max= ages.length[-1];

let len = ages.length;
let median = (ages[parseInt(len/2)-1] + ages[parseInt(len/2)])/2; 

const total = ages.reduce((sum, age) => sum + age, 0);
const average = total / len;
console.log(`The average age is ${average}`);


// iv 
let range = max - min;
console.log(`The range is: ${range} `);