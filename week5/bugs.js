let bug;
let bug2;

let bugs = [];

function setup() {
  createCanvas(500, 500);
  // bug = new Jitter();
  // bug2 = new Jitter();
  for (let i=0; i<10; i++){
    bugs.push(new Jitter());
  }
}

function draw() {
  background(220, 200, 300, 400);
//   bug.move();
//   bug.display();
  
//   bug2.move();
//   bug2.display();
  
  for (let i=0; i<10; i++){
   bugs[i].move();
   bugs[i].display();
  }
}

class Jitter{
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(20, 90);
    this.speed = 4;
  }
  
  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }
  
  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}