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

  orderPasta: function (ing1, ing2, ing3) {
    return console.log(
      `here is your pasta with ingredients ${ing1},${ing2},${ing3}`
    );
  },
};

const arr = [1, 2, 3];
let a = arr[0];
let b = arr[1];
let c = arr[2];

console.log(a, b, c);

const [x, y, z] = arr;

console.log(x, y, z);

let [first, , second] = restaurant.categories;
console.log(first, second);

//const temp = first;
//first = second;
//second = temp;

[first, second] = [second, first];
console.log(first, second);

console.log(restaurant.order(2, 0));

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

const nested = [2, [5, 6]];
const [i, [j, k]] = nested;
console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);

////////////////////////////////////////////destructuring objects

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let v = 123;
let n = 456;

const obj = { v: 1, n: 2 };
({ v, n } = obj);
console.log(v, n);

const {
  fri: { open: o, close: cl },
} = openingHours;
console.log(o, cl);
/////////////////////////spread operator

const array = [1, 2, 3];
const badNewArr = [4, 5, 6, array[0], array[1], array[2]];
console.log(badNewArr);
const newArr = [7, 8, 9, ...array];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'tomato'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menus);

const str = 'yashu';
const letters = [...str];
console.log(letters);

console.log(...str);
//console.log(`${...str} "kanchrala"`);

const ingredients = [
  //prompt('ingredient1'),
  //prompt('ingredient2'),
  //prompt('ingredient3'),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

const newRestaurent = { ...restaurant, ownerName: 'yashwanth' };
console.log(newRestaurent);

const copyRestaurent = { ...restaurant };
copyRestaurent.ownerName = 'tinku';
console.log(copyRestaurent);
console.log(restaurant);

//logical assignment operator

const rest1 = {
  name: 'yashwanth',
  numGuests: 0,
  owner: 'me',
};
const rest2 = {
  name: 'yash',
  owner: 'tinku',
};

//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1, rest2);

rest1.owner &&= 'anonymous';
rest2.owner &&= 'anonymous';

console.log(rest1, rest2);

const menu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu1);

for (const item of menu1) console.log(item);
for (const item of menu1.entries()) console.log(item);

for (const [i, el] of menu1.entries()) {
  console.log(`${i + 1}: ${el}`);
}

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

///
//console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 10;
  console.log(`on ${day} we open at ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
console.log(restaurant.ordertiffin?.(0, 1) ?? 'method does not exist');

const users = [{ name: 'yash', email: 'yash@gmail.com' }];

console.log(users[0]?.name ?? 'users does not exist');
console.log(users[2]?.name ?? 'users does not exist');
/// properties
const properties = Object.keys(openingHours);

console.log(properties);
let opnStr = `we are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  //console.log(day);
  opnStr += `${day},`;
}
console.log(opnStr);

///values
const values = Object.values(openingHours);
console.log(values);

///entries

const entries = Object.entries(openingHours);
//console.log(entries);
for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we are open at ${open} and closed at ${close}`);
}
