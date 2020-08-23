const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
   const p = document.querySelector('p');
   p.style.color = '#BADA55';
   p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
console.log('%s is my friend', 'Bob');
let name = 'Bob'
console.log(`${name} is my friend`);

// Styled
console.log('%c I am some great text', 'font-size: 3rem; background: red; text-shadow: 10px 10px 0 blue;');

// warning!
console.warn('OH NOOO');

// Error :|
console.error('ERROR!!!');

// Info
console.info('console dot info');

// Testing
// Will only log if the expression is wrong
console.assert(1 ===2, `This is wrong`);

// clearing
console.clear(); // clears the console

// Viewing DOM Elements
let p = document.querySelector('p');
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
   // console.group(`${dog.name}`);
   console.groupCollapsed(`${dog.name}`);
   console.log(`This dog is ${dog.name}`);
   console.log(`${dog.name} is ${dog.age} years old`);
   console.groupEnd(`${dog.name}`);
})

// counting
console.count(`label`);
console.count(`label`);
console.count(`object`);
console.count(`label`);
console.count(`object`);
console.count(`label`);
console.count(`label`);
console.count(`object`);
console.count(`label`);

// timing
console.time(`fetching data`);
fetch('https://api.github.com/users/wesbos')
   .then(data => data.json())
   .then(data => {
      console.timeEnd('fetching data');
      console.log(data);
   })

// table
console.table(dogs);

console.dir(document);