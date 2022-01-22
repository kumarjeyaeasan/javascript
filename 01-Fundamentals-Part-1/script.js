
/*
let js = "amazing";
console.log(45 + 5 - 8);

let firstName = "Senthil";
console.log(firstName);

// Exercise - 1
let country = "India";
let continent = "Asia";
let population = "1300 million";

console.log(country);
console.log(continent);
console.log(population);


// Coding Challenge - 1

const weightMark = 95;
const heightMark = 1.88;

const weightJohn = 85;
const heightJohn = 1.76;

const bmiMark = weightMark / heightMark ** 2;
const bmiJohn = weightJohn / heightJohn ** 2;

const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);

// Coding Challenge - 2

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's(${bmiJohn})`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
}


// Coding Challenge - 3

// const teamDolphinsScore1 = 96;
// const teamDolphinsScore2 = 108;
// const teamDolphinsScore3 = 89;

// const teamKoalasScore1 = 88;
// const teamKoalasScore2 = 91;
// const teamKoalasScore3 = 110;


// const teamDolphinsScore1 = 97;
// const teamDolphinsScore2 = 112;
// const teamDolphinsScore3 = 101;

// const teamKoalasScore1 = 109;
// const teamKoalasScore2 = 95;
// const teamKoalasScore3 = 123;

const teamDolphinsScore1 = 97;
const teamDolphinsScore2 = 112;
const teamDolphinsScore3 = 101;

const teamKoalasScore1 = 109;
const teamKoalasScore2 = 95;
const teamKoalasScore3 = 106;

const teamDolphinsAvg = (teamDolphinsScore1 + teamDolphinsScore2 + teamDolphinsScore3) / 3;

const teamKoalasAvg = (teamKoalasScore1 + teamKoalasScore2 + teamKoalasScore3) / 3;

console.log(teamDolphinsAvg, teamKoalasAvg)

if (teamDolphinsAvg > teamKoalasAvg) {
    console.log(`Team Dolphins Wins!`);
} else if (teamDolphinsAvg < teamKoalasAvg) {
    console.log(`Team Koalas Wins!`);
}
else if (teamDolphinsAvg === teamKoalasAvg) {
    console.log(`It's a Draw!`);
}

if (teamDolphinsAvg > teamKoalasAvg && teamDolphinsAvg >= 100) {
    console.log(`Team Dolphins Wins!`);
} else if (teamDolphinsAvg < teamKoalasAvg && teamKoalasAvg >= 100) {
    console.log(`Team Koalas Wins!`);
}
else if (teamDolphinsAvg === teamKoalasAvg && teamDolphinsAvg >= 100 && teamKoalasAvg >= 100) {
    console.log(`It's a Draw!`);
} else {
    console.log(`No one Wins the Trophy!`);
}
*/

// Coding Challenge - 4

const billValue = 430;

const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;

console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip} `);