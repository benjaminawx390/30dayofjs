
//Exercise 1

// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
var challenge = '30 Days Of JavaScript';

// Print the string on the browser console using console.log()
console.log(challenge);

// Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// Change all the string characters to capital letters using toUpperCase() method
var challengeUpperCase = challenge.toUpperCase();
console.log(challengeUpperCase);

// Change all the string characters to lowercase letters using toLowerCase() method
var challengeLowerCase = challenge.toLowerCase();
console.log(challengeLowerCase);


// Cut (slice) out the first word of the string using substr() or substring() method
var firstWord = challenge.substr(3,4);
console.log(firstWord);

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
var phrase = challenge.substr(11,10);
console.log(phrase);

// Check if the string contains a word Script using includes() method
console.log(challenge.includes('JavaScript'));

// Split the string into an array using split() method
console.log(challenge.split());

// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));


// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
var bigTech = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' ;
console.log(bigTech.split(', '));

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript','Python'));

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'));

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
var sentence='You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because'));

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because'));

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
var challengeTwo =' 30 Days Of JavaScript ';
console.log(challengeTwo.trim());

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith(''));

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith(''));

// Use match() method to find all the a’s in 30 Days Of JavaScript
//Tip: /a/gi means to search all the 'a' inside when we use with match().
var pattern = /a/gi;
console.log(challenge.match(pattern));

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
var firstPhrase = '30 Days of';
var secondPhrase= 'JavaScript';
console.log(firstPhrase.concat(' ' + secondPhrase));

// Use repeat() method to print 30 Days Of JavaScript 2 times

console.log(challenge.repeat(2));
// -------------------------------------------------------------------------------------------------------//
//Exercise 2
// using the \ icon before apostrophe will tell JS it has nothing to do with jQuery and treat the symbol as it is. OR use double
var first ='There is no exercise better for the heart than reaching down and lifting people up.';
var second = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";

console.log(first);
console.log(second);

/// Use parseFloat , or number 
console.log(typeof 10 === typeof parseFloat("10"));

console.log(typeof 10 === typeof parseFloat('9.8'));

let language="python" , nonlanguage='jargon';

console.log(language.includes('on') && nonlanguage.includes('on'));

let jargonSentence = 'I hope this course is not full of jargon.';
console.log(jargonSentence.includes('jargon'));

let random= Math.random() * 100;
let randomRange = random + 1 ;
console.log(Math.floor(randomRange));


console.log(Math.floor(Math.random ()* 51)+50);

console.log(Math.floor(Math.random() * 255) + 1); 

//Access the 'JavaScript' string characters using a random number.

let word = 'JavaScript';
console.log(word[9]);
//If string is too long we need to first find it, then find the index.

console.log (word.length);
//finding the last index is what letter
console.log (word.charAt(word.length-1));
console.log (word.indexOf('t'));
console.log (word[9]);

console.log
('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');

let qn12 = 'You cannot end a sentence with because because because is a conjunction';
console.log(qn12.includes('because')); //First we check if it exist
console.log(qn12.indexOf('because')); //Second, we find the first instance of the phrase at
console.log(qn12.lastIndexOf('because')); //Thirdly, we find the last starting INDEX instance of the phrase we are looking for. The output is the index of 'b'.
//Then, we do some quick math. How many index does the phrase have ? 7. We add 7 to 47 then we minus the total from 31.

console.log(qn12.substr(31,23));


//-----------------------------------------------------------------------------------------------------------------//

//Exercise 3

let love = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(love.match(/love/gi));
console.log(love.match(/love/gi).length);

let sentence2 ="You cannot end a sentence with because because because is a conjunction";
console.log(sentence2.match(/because/gi));
console.log(sentence2.match(/because/gi).length);

