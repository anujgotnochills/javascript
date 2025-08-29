const score = 2345
// console.log(score);

const balance = new Number(56)
// console.log(balance);
// console.log(balance.toString().length); //no kitne digits m hai vo btata hai

// console.log(balance.toFixed(2)); //decimal ke badh value kitni rakhni hai uske liye use hota hai

const random = 123.234
// console.log(random.toPrecision(4)); //round off or exact value btane ke liye use hota hai

const amount = 1234567890
// console.log(amount.toLocaleString('en-IN')); //commas lagte hai isse mostly use in accounts eg:- 1,00,000

//++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-45)); //converts neg to pos
console.log(Math.round(23.4)); // rounds off the value (removes the decimal value)
console.log(Math.ceil(25.45)); // rounds off to the high value 4.3 => 5
console.log(Math.floor(23.9)); // rounds off to the lower value 4.9 => 4

console.log(Math.random()); //ranges between 0 to 1
console.log(Math.random()*10); //now it will be between 0 to 10
console.log((Math.random()*10)+1); // now it will be between 1-10
console.log(Math.floor(Math.random()*10)+1); // without decimal numbers


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1) + min)); // it will now give values bet min and max without decimal values



