'use strict';

/*
// const interface = 'Audio';

// Function Declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}
const age1 = calcAge1(1990);

// Function Expression
// Anonymous Function
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge2(1990);

// Arrow Function
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1990)
console.log(age1, age2, age3);

// Arrow Function with more than one line of body, also more number of parameters
// Note: for multiple lines of body, return is must just like other functions
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 58 - age;
    return `${firstName} retires in ${retirement} years`;

};

console.log(yearsUntilRetirement(1990, `Raj`));
console.log(yearsUntilRetirement(1983, `Senthil`));


// Coding Challenge - 1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);

    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team Wins! ${avgDolphins} ${avgKoalas}`);
    }

}

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);

const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const years = [1980, 1990, 2000, 2010];
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length - 1])];

console.log(ages);



// Coding Challenge - 2


function calcTip(billValue) {
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;
}


console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length - 1] + tips[tips.length - 1]];

console.log(bills);
console.log(tips);
console.log(total);


// Object
const senthil = {
    firstName: 'Senthil',
    lastName: 'J',
    birthYear: 1983,
    friends: ['Ram', 'John', 'Syam'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    // calcAge: birthYear => 2022 - birthYear

    // calcAge: function () {
    //     return 2022 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is ${this.calcAge()} years old and he has ${this.hasDriversLicense ? 'a' : 'no'} license`;
    }

};

// console.log(senthil.calcAge(1983));
// console.log(senthil.calcAge());
console.log(senthil.calcAge());

// Note: age will be undefined, if calAge() was not called first
console.log(senthil.age);

console.log(senthil.getSummary());

// Coding Challenge - 3

const mark = {
    fullName: 'Mark Miller',
    weight: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    weight: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi {}= this.weight / this.height ** 2;
        return this.bmi;
    }
}

const bmiMark = mark.calcBMI();
const bmiJohn = john.calcBMI();

if (bmiMark > bmiJohn) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (bmiJohn > bmiMark) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}


// Coding Challenge - 4


function calcTip(billValue) {
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;
}


console.log(calcTip(100));

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
    let calTip = calcTip(bills[i]);
    let calTot = calTip + bills[i];
    tips.push(calTip);
    total.push(calTot);
}

console.log(bills);
console.log(tips);
console.log(total);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage(total));
console.log(calcAverage(tips));
console.log(calcAverage(bills));

*/