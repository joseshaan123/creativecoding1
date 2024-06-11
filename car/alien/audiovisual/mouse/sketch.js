function setup() {
  createCanvas(800, 600);
  background(0);
}

function draw() {
  
  fill(250,0,0,10); // 
  stroke(0,250,0); 
  strokeWeight(1)
  ellipse(mouseX, mouseY, 60, 60); 
}
