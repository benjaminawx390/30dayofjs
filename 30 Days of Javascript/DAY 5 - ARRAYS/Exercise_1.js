//DAY 5 ARRAY EXERCISE
//Lvl 1


//q1
const arr = Array();
const array=[];

//q2
const arr = Array(5);
console.log(arr);

//q3
console.log(arr.length);

//q4
//Get the first item, the middle item and the last item of the array

let firstItem = arr[0];
let secondItem = arr(arr.length/2);
let lastItem = arr[arr.length-1];

//q5
//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [10 , "Jack", "joe" , true , false , null , undefined];

console.log(mixedDataTypes.length);

//q6
//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);

//q8
//print the number of companies in the array

console.log(itCompanies.length);

//q9
//Print the first company, middle and last company

console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length/2)]);
console.log(itCompanies[itCompanies.length-1]);

//q10
//Print out each company

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

//q11
//Change each company name to uppercase one by one and print them out

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

//q12
//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(itCompanies[0] + "," + itCompanies[1] + "," + itCompanies[2] + "," + itCompanies[3] + "," + itCompanies[4] + "," + itCompanies[5] + "," + itCompanies[6] + " are big IT companies.");

//q13
//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.

if (itCompanies.includes("Facebook")){
  console.log("Facebook is found");
}
else {
  console.log ("Facebook is not found");
}

//q14
//Filter out companies which have more than one 'o' without the filter method

let filteredCompanies = [];

itCompanies.forEach(company => {        // To find companies with double 'o'

    if (company.match(/o/gi) === null || company.match(/o/gi).length <= 1) return

    filteredCompanies.push(company);
})

console.log(filteredCompanies);

//q15
//sort the array using sort() method

console.log(itCompanies.sort());

//q16
//Reverse the array using reverse() method

console.log(itCompanies.reverse());

//q17
//slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));

//q18
// Slice out the last 3 companies from the array

len = itCompanies.length;
let last3Companies=itCompanies.slice(len-3,len);
console.log(last3Companies);

// q19
// Slice out the middle IT company or companies from the array

let middleCompany = itCompanies.slice(Math.floor(itCompanies.length/2), Math.floor((itCompanies.length/2)+1));

console.log(middleCompany);

//q20
//Remove the first IT company from the array
console.log(itCompanies.shift());

//q21
//remove the middle IT company from the array
itCompanies.splice((itCompanies.length/2)-1, 2); //accessing index 2.5 starting with 2 index targetted microsoft,apple.
console.log(itCompanies);

//q22
//remove the last IT company from the array
console.log(itCompanies.pop());

//q23
//remove all company
console.log(itCompanies.splice(0, itCompanies.length));
