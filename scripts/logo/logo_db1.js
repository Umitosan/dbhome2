/*
  pallete 1
  hot pink: #C32068  rgb(195,32,104)
  green:    #1A9F63  rgb(26,159,99)
  yellow:   #E6E626
*/

ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';

ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(10,10);
ctx.lineTo(10,110);
ctx.stroke();

ctx.beginPath();
ctx.arc(10,60,50,-(Math.PI/2),(Math.PI/2));
ctx.stroke();
ctx.fill();

ctx.strokeStyle = 'green';
ctx.fillStyle = 'green';

ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(62,55);
ctx.lineTo(62,110);
ctx.stroke();

ctx.beginPath();
ctx.arc(62,75,20,-(Math.PI/2),(Math.PI/2));
ctx.stroke();
ctx.fill();

ctx.strokeStyle = 'red';
ctx.fillStyle = 'red';

ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(84,72);
ctx.lineTo(84,110);
ctx.stroke();

ctx.beginPath();
ctx.arc(84,82,9,-(Math.PI/2),(Math.PI/2));
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(84,100,9,-(Math.PI/2),(Math.PI/2));
ctx.stroke();
ctx.fill();

// context.arc(x,y,r,sAngle,eAngle,counterclockwise);
