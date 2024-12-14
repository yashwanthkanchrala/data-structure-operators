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
const ordersSet = new Set(['pizza', 'pasta', 'pizza', 'brocolli', 'pasta']);
console.log(ordersSet);
console.log(new Set('jonas'));
console.log(new Set());
console.log(ordersSet.size);
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('chicken'));
ordersSet.add('garlic bread');
ordersSet.add('garlic bread');
ordersSet.delete('pasta');
//ordersSet.clear();
console.log(ordersSet);

for (const order2 of ordersSet) console.log(order2);

const staff = ['chef', 'waiter', 'manager', 'chef', 'waiter', 'waiter', 'chef'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set('yashwanth').size);

const rest = new Map();
rest.set('name', 'classico italiano');
rest.set('firenzo', 'italy');
console.log(rest.set('lisbon', 'portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 10)
  .set('close', 23)
  .set(true, 'we are opened')
  .set(false, 'we are closed');

console.log(rest.get('categories'));
console.log(rest.get(true));
const time = 17;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);
//rest.clear();
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

const array3 = [1, 2];
rest.set(array3, 'test');
console.log(rest.get(array3));

const question = new Map([
  ['question', 'which is best programming language'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);
console.log(question);

console.log(Object.entries(openingHours));

const hourMap = new Map(Object.entries(openingHours));
//console.log(new Map(Object.entries(openingHours)));
console.log(hourMap);
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`option ${key}: ${value}`);
  }
}
//const answer = Number(prompt('your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

console.log([...question.keys()]);

const airlines = 'kingfisher';
const planes = 'yash1810';

console.log(airlines[0]);

console.log(airlines[1]);

console.log(airlines[2]);

console.log('kingfisher'[4]);

console.log(airlines.length);
console.log('yash1810'.length);

console.log(planes.indexOf(8));
console.log(airlines.lastIndexOf('i'));

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('bad luck you have got middle seat');
  } else {
    console.log("congrats you didn't get middle seat");
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAs';

const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = 'hello@jonas.io';
const loginEmail = ' Hello@jonas.io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(email);
console.log(loginEmail);
console.log(lowerEmail);
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);
console.log(email === normalizedEmail);

const pricegb = '223,47^';
const priceus = pricegb.replace(',', '.').replace('^', '$');

console.log(priceus);

const announcement =
  ' All passengers come to boarding door 23.boarding door 23';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replaceAll(/door/g, 'gate'));

const plane1 = 'Air A320neo';

console.log(plane1.includes('A32'));
console.log(plane1.includes('booeing'));
console.log(plane1.startsWith('Air'));

const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('sorry, your baggage is not allowed');
  } else {
    console.log('welcome abroad');
  }
};

checkBaggage('i have Knife');
checkBaggage('i have Snacks');
checkBaggage('i have gun');

console.log('a+very+nice+day'.split('+'));
console.log('yashwanth kancharla'.split(' '));

const [firstname, lastname] = 'yashwanth kancharla'.split(' ');
console.log(firstname, lastname);

const newName = ['mr.', 'yashwanth', 'kancharla'.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  console.log(names);

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('yashwanth kancharla');

console.log('yashwanth'.padStart(14, '*').padEnd(19, '*'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(1234567890));

const message2 = 'hi my name is yashwanth   ';
console.log(message2.repeat(5));

const message3 = function (n) {
  console.log(`there are ${n} of planes are waiting ${'yes'.repeat(n)}`);
};
message3(3);
