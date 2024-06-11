let nature;
let coverimage;


function preload() {
 
  nature = loadImage('nature.jpg');
}

function setup() {
  createCanvas(400, 400);

 
  coverimage = createGraphics(width, height);

  
 
  coverimage.fill(0); 
  coverimage.noStroke(); 
  coverimage.ellipse(width / 2, height / 2, 200, 200); 
  // 
  nature.mask(coverimage);

  // 
  image(nature, 100, 100, width, height);
}
