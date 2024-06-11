let type = 'Bath Spa University';
var bathSpa;
function preload(){
  bathspa=loadFont('font.ttf');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(50);
  textFont(bathspa,60)
  textAlign(CENTER, CENTER);
  frameRate(60);
}

function draw() {
  background(20);
  fill(255,0,0);

  text(type, width / 2, height / 2);

 
  for (let c = 0; c < 100; c++) {
    let a = random(width);
    let b = random(height);
    let boxSize = random(5, 20);
    let interval = dist(a, b, width / 2, height / 2);

   
    if (interval > 25) {
      fill(random(200, 400), random(20, 225), random(40, 280), 80);
      noStroke();
      rect(a, b, boxSize);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
