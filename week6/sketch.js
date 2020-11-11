let xpos1 = 250
let xpos2 = 350

let isOverFace;
let backgroundColor;
let strokeColor;

let bubbles = [];

function setup(){
  createCanvas(600, 600);
  backgroundColor = color(0,70,50);
  strokeColor = color(255,170,180);
  ypos = new rabbitEar
}

function draw(){
  background(backgroundColor);
  textSize(100)
  text('carr_t',160,140);
  
  if ((keyIsPressed == true) && (key == 'o')) {
    text('o',332,140);
    let r = random(10,30);
    let b = new Bubble(random(0,600),random(0,600),r);
    bubbles.push(b);
  } else {
    text('',0,0);
  }
  
  for (let i=0; i<bubbles.length; i++){
   bubbles[i].move();
   bubbles[i].display();
  }
  
  ypos.update();
  var distance = dist(mouseX,mouseY,300,450);

  if (distance < 100) {
    isOverFace = true;
  } else {
    isOverFace = false;
  }
  
  if(isOverFace == true){
    fill(25,25,25);
    cursor(HAND);
  } else {
    fill (255,180,190);
    cursor(ARROW);
  }
   
  noStroke();
  ellipse(width/2,height*3/4,200,150);
  
  // ellipse(width/2,height,250,250);
  
  stroke(255,0,0);
  strokeWeight(1);
  fill(random(255),random(255),random(255));
  ellipse(width/2-50,height*3/4,20,30-(distance*0.1));
  
  stroke(255,0,0);
  strokeWeight(1);
  ellipse(width/2+50,height*3/4,20,30-(distance*0.1));
  
  stroke(255,0,0);
  noStroke();
  fill(255,50,0);
  ellipse(width/2,height*4/5,20,10);
  
}

class Bubble{
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.speed = 2;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    stroke(255);
    fill(random(255),random(255),random(255));
    ellipse(this.x, this.y, this.r*2);
  }
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    ypos.vmom -= ypos.speed;
  }
  if(keyCode == DOWN_ARROW){
    ypos.vmom += ypos.speed;
  }
  return false;
}

function mousePressed(){
  if(isOverFace == true) {
    backgroundColor = color(random(255), random(255), random(255));
  }
}

function rabbitEar(){
  this.y = 400;
  
  this.vmom = 0;
  
  this.speed = 10;

  
  this.update = function(){
    this.move();
    this.render();
  }
  
  this.move = function(){
    this.y += this.vmom;
    
    this.vmom *= 0.9;
    
    this.checkCollisions();
  }
  
  this.checkCollisions = function(){
    if (this.y <= 0) {
      this.y = 50
    } else if (this.y >= 380) {
      this.y = 380
    }
  }
  
  this.render = function(){
  stroke(strokeColor);
  strokeWeight(50);
  line(width/2-50,400,xpos1, this.y);
    
  strokeWeight(50);
  line(width/2+50,400,xpos2, this.y);
    
  if(isOverFace == true){
    strokeColor = color(0);
  } else {
    strokeColor = color(255,170,180);
  }
}
}