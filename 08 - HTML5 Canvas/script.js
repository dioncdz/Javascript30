const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;
// experiment on ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

let hue = 0;

let direction = true;


function draw(e) {
   // Stop func from runnign when they are not moused down
   if(!isDrawing) return;
   console.log(e);
   ctx.beginPath();
   
   // Start from
   ctx.moveTo(lastX, lastY);
   ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

   // Go to
   ctx.lineTo(e.offsetX, e.offsetY);
   ctx.stroke();

   [lastX, lastY] = [e.offsetX, e.offsetY];

   // Change color while mouse moves 
   hue++;

   // Change size of the stroke
   // increase to 100
   // decrease from 100
   if (ctx.lineWidth >= 100 || ctx.lineWidth <=10) {
      direction = !direction;
   }
   
   if(direction) {
      ctx.lineWidth++;
   } else {
      ctx.lineWidth--;
   }
}
canvas.addEventListener('mousedown', (e)=> {
   isDrawing = true;
   [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', ()=> isDrawing = false);
canvas.addEventListener('mouseout', ()=> isDrawing = false);