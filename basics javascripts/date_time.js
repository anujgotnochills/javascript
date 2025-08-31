
const mydate = new Date();
console.log(mydate.toDateString()); //op/- Sun Aug 31 2025
console.log(mydate.toLocaleString()); //op/- 31/8/2025, 11:54:27 am
console.log(mydate.toJSON()); //op/- 2025-08-31T06:24:27.740Z
console.log(mydate.toDateString()); //op/- Sun Aug 31 2025
console.log(typeof(mydate)); //op/- object

const newdate = new Date(2025, 6, 31);
console.log(newdate.toDateString()); //op/- Thu Jul 31 2025
