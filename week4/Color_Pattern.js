function setup(){
  createCanvas(800, 600);
  frameRate(7)
}

function draw(){
  let size = 50;
     
  for(let x = 0; x < width; x += size) {
    for(let y = 0; y < height; y += size){
      fill(Math.random() * 300, Math.random()*300, Math.random()*300);
      noStroke();
      rect(x, y, size, size);

      fill(Math.random() * 400, Math.random()*400, Math.random()*400)
      noStroke(); 
      rect(x+10, y+10, size - 20, size - 20)
      
    }
  }
}