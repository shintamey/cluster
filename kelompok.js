var myCanv = document.getElementById('myCanvas');
var c = myCanv.getContext('2d');

myCanvas.width = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;
myCanvas.width = myCanvas.scrollWidth
myCanvas.height = myCanvas.scrollHeight

c.beginPath();
c.moveTo(80, 160);
c.lineTo(250, 160);
c.lineTo(250, 390);
c.lineTo(80, 390);
c.closePath();
c.lineWidth = 2;
c.strokeStyle='black';
c.fillStyle ='#e49eb8';
c.fill();
c.stroke();

c.beginPath();
c.moveTo(80, 160);
c.lineTo(80, 130);
c.lineTo(250, 130);
c.lineTo(250, 160);
c.lineWidth = 2;
c.strokeStyle='black';
c.fillStyle ='#e49eb8';
c.fill();
c.stroke();

c.beginPath();
c.moveTo(150, 130);
c.lineTo(150, 100);
c.lineTo(175, 100);
c.lineTo(175, 130);
c.lineWidth = 2;
c.strokeStyle='black';
c.fillStyle ='#e49eb8';
c.fill();
c.stroke();