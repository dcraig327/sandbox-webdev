//2 teams, 3 games, highest avg score gets the trophy

// dolphinsGame1 = 96;
// dolphinsGame2 = 108;
// dolphinsGame3 = 89;
// koalasGame1 = 88;
// koalasGame2 = 91;
// koalasGame3 = 110;

// dolphinsGame1 = 97;
// dolphinsGame2 = 112;
// dolphinsGame3 = 101;
// koalasGame1 = 109;
// koalasGame2 = 95;
// koalasGame3 = 123;

dolphinsGame1 = 97;
dolphinsGame2 = 112;
dolphinsGame3 = 101;
koalasGame1 = 109;
koalasGame2 = 95;
koalasGame3 = 106;


dolphinsAverageScore = (dolphinsGame1 + dolphinsGame2 + dolphinsGame3) / 3;
koalasAverageScore = (koalasGame1 + koalasGame2 + koalasGame3) / 3;

console.log(`${Object.keys({ dolphinsAverageScore })}: ${ dolphinsAverageScore }`);
console.log(`${Object.keys({koalasAverageScore})}: ${koalasAverageScore}`);

if ((dolphinsAverageScore > koalasAverageScore) && (dolphinsAverageScore > 100)) {
  console.log(`Dolphins win the trophy!`);
} else if ((koalasAverageScore > dolphinsAverageScore) && (koalasAverageScore > 100)) {
  console.log(`Koalas win the trophy!`);
} else if ((koalasAverageScore === dolphinsAverageScore) && (koalasAverageScore > 100)) {
  console.log(`The Dolphins and Koalas tie and share the trophy!`);
} else {
  console.log(`Neither team averaged 100, maybe next year.`);
};
