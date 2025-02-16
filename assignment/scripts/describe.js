// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Declared a variable called 'name' and set its value to 'Dane'
// Set a conditional where if 'name' is equal to 'Mary' we console.log "Hi, Mary!", but if name is NOT equal to 'Mary',
// then we console.log "How do you do?"
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Declare a variable called 'secret' but leave its value as undefined
// Declare a variable called 'code' and set its value as 123
// set a conditional where if 'code' is equal to 123, variable 'secret'='super and code=code multiplied by 2
//another conditional where if code is greater than 250, it changes the value of variable 'secret' to 'duper'
//we console.log secret

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// declare a boolean variable called 'isStudent' and set its value as true, 
// declare a variable called 'age' and set its value as '34'
// declare a variable called 'zip' and set its value as '55407'
//set conditional where if 'isStudent'=true AND 'zip' is greater than 80000, then we console.log "You're a student"
//on the West Coast!' but if not, then it checks if 'isStudent' is false OR if the 'age' variable is less than 30
//, in which case if one of those is true, then it console.logs "what are your hobbies?"
//but if neither of those are true, it will then check check if 'isStudent' boolean is true, and if it is, then 
//it will console.log 'welcome to Prime!', however, if the isStudent is not false, then it will console.log
//"how about the weather?"



//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

//colorOne is actually set to 'red'
//colorTwo is actually set to 'blue
// in the code if mix===true, then colorOne = 'purple, but the part of the code to set
//colorTwo to 'purple' is missing.

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

//First thing I noticed on this one is that the time is not set as a variable,
//but rather a constant, which makes it unable to change, which creates a problem for the 
//conditional portion. The second issue is that the current conditional is not checking to see if temp
// AND time, but rather it is checking to see if temp OR time in which case the console.log will 
//always log 'throw away the food so long as one of the conditions is true. 

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

//The problem here is that 'minAge' should be greater than or equal to 'age', whereas
//currently it is set as less than or equal to 'age'. 

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

