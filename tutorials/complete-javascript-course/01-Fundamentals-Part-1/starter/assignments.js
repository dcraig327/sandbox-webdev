let country = 'USA';
let continent = 'North America';
let population = 330;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = 'English';

console.log(typeof language);

let halfCountryPopulation = population / 2;
console.log(halfCountryPopulation);

let newCountryPopulation = population + 1 / 1000000;
console.log(newCountryPopulation);

const finlandPopulation = 6;
console.log(population > finlandPopulation);

const averageCountryPopulation = 33;
console.log(population > averageCountryPopulation);

const portugalPopulation = 11;
let description = `Portugal is in Europe, and its ${portugalPopulation} people speak portugese`;
console.log(description);

console.log(language);

if (population > averageCountryPopulation) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${averageCountryPopulation - population} million below average`);
}

/*
  4
  '617'
  23
  false
  1143
*/

let numNeighbors;
//numNeighbors = Number(prompt("How many neighbor countries does your country have?"));

if (numNeighbors === 1) {
  console.log('Only 1 border!');
} else if (numNeighbors > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}

