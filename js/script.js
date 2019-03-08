const canvas = document.querySelector('#canvas');
console.log(canvas);

var ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(255, 127, 39)';

ctx.beginPath(); 
ctx.arc(190, 230, 150, 0, Math.PI*2, false); 
ctx.closePath(); 
ctx.fill(); 

ctx.fillStyle = 'rgb(0, 0, 0)';

ctx.beginPath(); 
ctx.arc(190, 230, 130, 0, Math.PI*2, false); 
ctx.closePath(); 
ctx.fill(); 

ctx.fillStyle = 'rgb(255, 127, 39)';

ctx.beginPath(); 
ctx.moveTo(140, 150);
ctx.lineTo(140, 180);
ctx.lineTo(170, 180);
ctx.lineTo(175, 200);
ctx.lineTo(130, 310);
ctx.lineTo(160, 310);
ctx.lineTo(190, 230);
ctx.lineTo(220, 310);
ctx.lineTo(270, 288);
ctx.lineTo(260, 270);
ctx.lineTo(240, 280);
ctx.lineTo(195, 150);
ctx.lineTo(140, 150);
ctx.fill(); 