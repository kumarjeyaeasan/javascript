"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico  ",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

// Rest Pattern and Parameters
// ===========================
// SPREAD coz ... at right side of =
// const arr = [1, 2, 3, ...[4, 5]];
// console.log(arr); // 1,2,3,4,5

// // REST coz ... at left side of =
// const [a, b, ...misc] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(a, b, misc); // 1,2,[3,4,5,6,7,8,9] as array and NOT individual element

// const [pizza, , rissotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, rissotto, otherFood); // Note: otherFood won't include skipped items (pasta from mainMenu)

// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(sat, weekDays);

// Functions
// ---------
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(2, 1, 4);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9);
// spread operator (...)
// =====================

// const arr = [7, 8, 9];

// // console.log(arr[0], arr[1], arr[2]);
// console.log(...arr); // 7,8,9

// const newMenu = [...restaurant.mainMenu, "Gnocchi"];
// console.log(newMenu);

// Copy Array
// ----------
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Merge Array
// // ----------
// const menuAll = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menuAll);

// Iterables:arrays, strings,maps, sets but NOT Objects
// const str = "Senthil";
// const letters = [...str, " ", "J"];
// console.log(letters);
// const ingridents = ["Mushroom", "Paneer", "Garlic"];
// restaurant.orderPasta(...ingridents);

// Objects
// -------
// const newRestaurant = { ...restaurant, founder: "Senthil" };
// console.log(newRestaurant);

// console.log(`${...str}`); // doesn't work
// restaurant.orderDelivery({
//   time: "22:30",
//   address: "xyz",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "xyz",
// });
// Object Destructuring
// ====================
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// Default Values
// --------------
// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

// Mutating Variables
// ------------------
// let a = 111;
// let b = 999;
// console.log(a, b);
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested Objects

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// // const { fri } = hours; // open:11, close:23
// // console.log(fri);

// const {
//   fri: { open, close },
// } = hours;
// console.log(open, close);

// Destructuring Arrays
// ====================
// const arr = [2, 3, 4];

// const [x, y, z] = arr;
// console.log(x, y, z);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// const [first, , third] = restaurant.categories;
// console.log(first, third);

// Swap
// ----
// Swap variables (without need for temp variables)
// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// Order Garlic Break and Pizza
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// Nested
// ------
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default Values
// --------------
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
