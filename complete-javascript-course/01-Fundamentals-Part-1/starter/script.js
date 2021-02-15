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

// const inputYear = "1991";
// console.log(`${Object.keys({ inputYear })}: ${inputYear}`, inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);
// console.log(String(23), 23);
// // in console.log blue/purple is number, white/black is string

// //type coercion
// console.log("I am " + 27 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" * 2);
// console.log("23" > "18");

// str + num    = str
// str + bool   = str
// all other cases:
// str/num/bool op str/num/bool = num

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// // 5 falsy values: 0, '', undefined, null, NaN
// // values that are false when converted to boolean

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all!");
// } else {
//   console.log("You should get a job!");
// }

// let height;
// if (height) {
//   console.log("Yay height is defined");
// } else {
//   console.log("Height is undefined");
// }

// === strict,type coercion
// == loose
// const age = 18;
// if (age === 18) {
//   console.log("You just became an adult.");
// }

//NOTE: Select a string, then press ( to wrap in ()
//NOTE: if <tab> then press tab to cycle between the snippet fields

// const fav = 1;
// //fav = Number(prompt("What's your favorite number"));
// console.log(fav);

// if (fav == 23) {
//   console.log("23 cool");
// } else if (fav == 7) {
//   console.log("7 is cool");
// } else {
//   console.log("not 23 or 7");
// }

// // !== 
// // !=

// // if (fav !== 23) 
// //   console.log('not 23');

// if (fav !== 23) {
//   console.log('not 23');
// }

// console.clear();

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);

///////////////////////////////
// expressions vs statements //
///////////////////////////////
//expressions produce values
//statements translate our actions

// const age = 23;
// age >= 18 ? console.log('Beer good') : console.log('Water bad');

//Author states ECMA annual releases is more of a release, not a version as they are backwards compat with all old code and only add new features

//Development: use latest chromium
//Production: use babel to transpile and polyfill your code (converting back to ES5 to ensure browser compatibility for all users)
//ES5: from 2011, IE9 and all later browser
// When a feature is in stage 3, browsers start implementing them as they are destined for release


