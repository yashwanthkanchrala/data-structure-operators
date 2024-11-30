'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterindex, mainindex) {
    return [this.starterMenu[starterindex], this.mainMenu[mainindex]];
  },
  orderDelivery: function ({ starterindex, mainindex, time, location }) {
    return console.log(
      `order received of ${this.starterMenu[starterindex]} and ${this.mainMenu[mainindex]} at ${time} to ${location}`
    );
  },

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
};

/*const arr = [2, 3, 4];
const [x, y, z] = arr;

console.log(x, y, z);
console.log(arr);

const [a, , , b] = restaurant.categories;
console.log(a, b);

let [main, secondary] = restaurant.mainMenu;

//const temp = main;
//main = secondary;
//secondary = temp;

[main, secondary] = [secondary, main];

console.log(main, secondary);

//console.log(restaurant.order(2, 1));

const [starter, mainCourse] = restaurant.order(2, 1);

console.log(starter, mainCourse);

const nested = [2, 3, [5, 6]];

const [i, , j] = nested;
console.log(i, j);
const [q, , [w, e]] = nested;
console.log(q, w, e);

const [m = 9, n = 8, o = 3] = [1, 2];
console.log(m, n, o);
*/

/*const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 12;
let b = 13;
const obj = { a: 1, b: 2, c: 3 };
console.log(a, b);
({ a, b } = obj);
console.log(a, b);

const {
  fri: { open: o, close: c },
} = openingHours;

console.log(o, c);

restaurant.orderDelivery({
  starterindex: 1,
  mainindex: 2,
  time: '22:30',
  location: 'pragathinagar,sircilla',
});*/
