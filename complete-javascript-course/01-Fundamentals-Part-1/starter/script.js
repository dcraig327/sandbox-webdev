// console.clear();

// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);
// console.log("Jonas");
// console.log(23);

// //7 primitive data types
// //Number: floating point number
// let age = 23;
// //String
// let firstName = 'Jonas';
// //Boolean
// let fullAge = true;
// //Undefined 'empty value'
// let children;
// //Null 'empty value'
// //Symbol (ES2015) constant
// //BigInt (ES2020) larger integers than the Number can hold
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "David");

// let year;
// console.log(year);
// console.log(typeof year);
// year = 1991;
// // console.log(year);
// // console.log(hi);

// console.log(typeof null);


// let age = 30;
// age = 31;

// const birthYear = 1991;
// //birthYear = 1990;

// const futureYear = 2030;
// console.log(futureYear, birthYear);

// const firstName = 'abe';
// const lastName = 'jackson';
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5;


// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;
// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// const age = 17;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//   console.log("Sarah can start driving license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} year(s).`);
// }

// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

console.clear();
const inputYear = '1991';
console.log(`${Object.keys({ inputYear })}: ${inputYear}`);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));