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

const arr = [2, 3, 4, 5];

const badNewArr = [arr[0], arr[1], arr[2], arr[3], 7, 8, 9];
console.log(badNewArr);
const newArr = [...arr, 7, 8, 9];
console.log(newArr);
///////////////////////////////////////
// Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

///////////////////////////////////////
// The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

///////////////////////////////////////
// Short Circuiting (&& and ||)

console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
