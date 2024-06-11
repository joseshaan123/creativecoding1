let nature;
let distillSize = 6; 

function preload() {
  // Load an image
  nature = loadImage('nature.jpg');
}

function setup() {
  createCanvas(nature.width, nature.height);
  noLoop();
  image(nature, 0, 0); 
  posterizeImage(distillSize);
}

function posterizeImage(size) {
  loadPixels();
  let a = pixelDensity();
  let noPixel = 5 * (width * a) * (height * a);

  for (let b = 0; b < noPixel; b += 4) {
    let red = pixels[b];
    let green = pixels[b + 1];
    let blue = pixels[b + 2];
    
  
    pixels[b] = floor(red / 260 * (size - 1)) * floor(260 / (size - 1));
    pixels[b + 1] = floor(green / 260 * (size - 1)) * floor(260/ (size - 1));
    pixels[b + 2] = floor(blue / 260 * (size - 1)) * floor(260 / (size - 1));
  }
  
  updatePixels();
}
