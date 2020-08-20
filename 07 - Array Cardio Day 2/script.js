// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988  },
  { name: 'Kait', year: 1986  },
  { name: 'Irv', year: 1970  },
  { name: 'Lux', year: 2015  }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];
console.log('------------Array.prototype.some()--------------');
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
/*******
 * First solution
 */
// const isAdult = people.some(person => {
//   const currentYear = (new Date()).getFullYear();
//   if(currentYear - person.year >= 19) {
//     return true;
//   }
// })
/*******
 * Second solution
 */
// const isAdult = people.some(person => {
//   const currentYear = (new Date()).getFullYear();
//     return currentYear - person.year >= 19;
// })
/*******
 * Third solution
 */
const isSomeoneAnAdult = people.some(person => (new Date()).getFullYear() - person.year >= 19)
console.log(isSomeoneAnAdult); //return true

// Array.prototype.every() // is everyone 19 or older?
const isEveryOneAnAdult = people.every(person => (new Date()).getFullYear() - person.year >= 19)
console.log(isEveryOneAnAdult); //return false


console.log('------------Array.prototype.find()--------------');
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
/*******************
 * First solution
 */
// const comment = comments.find(comment => {
//   if (comment.id === 823423) {
//     return true;
//   }
// })
/*******************
 * Second solution
 */
const comment = comments.find(comment => comment.id === 823423);
console.log(comment);

console.log('------------Array.prototype.findIndex()--------------');
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

// TO DELETE AN ELEMENT IN THE ARRAY
/*******************
 * First solution
 */
// comments.splice(index, 1);

/*******************
 * Second solution
 */

const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];

console.log(newComments);
