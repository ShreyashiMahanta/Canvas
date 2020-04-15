var line1,line2,line3,line4;

var y,b,p,r;

function preload(){
  rImg = loadImage("red.png");
  yImg = loadImage("yellow.png");
  bImg = loadImage("blue.png");
  pImg = loadImage("pink.png");
}
function setup() {
 createCanvas(800,600);

 line1 = createSprite(300,5,900,20);
 line1.shapeColor = '#CC8899';
 line2 = createSprite(300,575,900,20);
 //line2.shapeColor = '#CC8899';
 line3 = createSprite(5,285,20,600);
 line3.shapeColor = '#CC8899';
 line4 = createSprite(740,270,20,600);
// line4.shapeColor = '#CC8899';
r = createSprite(40,40,10,10);
r.addImage(rImg);
r.scale = 0.1;
b = createSprite(70,40,10,10);
b.addImage(bImg);
b.scale = 0.1;
p = createSprite(100,43,10,10);
p.addImage(pImg);
p.scale = 0.12;
y = createSprite(130,42,10,10);
y.addImage(yImg);
y.scale = 0.1;
}

function draw(){
 background(255);

 if(mousePressedOver(y)){
   mousePressedYellow();
 }
 
 if(mousePressedOver(b)){
  mousePressedBlue();
}
if(mousePressedOver(p)){
  mousePressedPink();
}
if(mousePressedOver(r)){
  mousePressedRed();
}
 drawSprites();
}

function mousePressedBlue(){
     stroke(5);
     fill("#7EC8E3");
     line(200,200,50,50);
}

function mousePressedYellow(){
  stroke(5);
  fill("#FAD02C");
  line(200,200,50,50);
}
function mousePressedRed(){
  stroke(5);
  fill("#F51720");
  line(200,200,50,50);
}
function mousePressedPink(){
  stroke(5);
  fill("#D8A7B1");
  line(200,200,50,50);
}


//function mouseReleased(){

//}
  