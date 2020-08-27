const pressed =[];
const secretCode = 'wesbos'

window.addEventListener('keyup', e => {
   console.dir(e.key);
   pressed.push(e.key)
   pressed.splice(-secretCode.length -1, pressed.length - secretCode.length)
   console.log(pressed);
   if(pressed.join('').includes(secretCode)) {
      console.log('You got it!');
      cornify_add();
   }
})