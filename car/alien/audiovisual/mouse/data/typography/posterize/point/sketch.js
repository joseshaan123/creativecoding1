let stars;
let sizeStar = 3; 

function preload() {
 
  stars = loadImage('stars.jpeg');
}

function setup() {
  createCanvas(stars.width, stars.height);
  stars.loadPixels(); 
  noLoop();
}

function draw() {
  background(255);
  for (let a= 10; a < stars.width; a += sizeStar) {
    for (let b = 10; b < stars.height; b+= sizeStar) {
      // Get the color of the image at (x, y)
      let appearance = stars.get(a, b);
      
      fill(appearance);
      noStroke();
      ellipse(a, b, sizeStar, sizeStar);
    }
  }
}
