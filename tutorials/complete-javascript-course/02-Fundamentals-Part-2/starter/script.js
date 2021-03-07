'use strict';

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const finland = describeCountry('Finland', 6, 'Helsinki');
// const usa = describeCountry('USA', 328, 'Washington, D.C.');
// const canada = describeCountry('Canada', 38, 'Ottawa');

// console.log(finland);
// console.log(usa);
// console.log(canada);

///////////////////////////////////




// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// // const interface = 'Audio';
// // const private = 534;
// // const if = 23;

// function logger() {
//   console.log('My name is David');
// }

// logger();


// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);


// // Function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);

// // Arrow function, great for one liner functions, 
// // but do not get the this keyword
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);

// console.log(age1, age2, age3);

// // 
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));


// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const oragnePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apples and ${oragnePieces} pieces of orange.`;

//   return juice;
// }

// console.log(fruitProcessor(2, 3));


// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jimmy');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// friends.push('23');
// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));
// console.log(friends.indexOf(23));

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

