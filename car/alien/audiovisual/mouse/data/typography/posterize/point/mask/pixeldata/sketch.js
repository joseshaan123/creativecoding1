let nature;

function preload() {
  
  nature = loadImage('nature.jpg');
}

function setup() {
  createCanvas(500, 450);
  
  nature.resize(width, height);

  image(nature, 0, 0);

  
  loadPixels();
 
  for (let b = 300; b < height; b++) {
    for (let a = 0; a < width; a++) {
    
      let size = (a + b * width) * 4;
   
      let red = pixels[size];
      let green = pixels[size + 1];
      let blue = pixels[size + 2];
      
      let gray = (red + green + blue) / 4; 
      pixels[size] =gray; 
      pixels[size + 1] = gray; 
      pixels[size + 2] = gray; 
    
    }
  }

  updatePixels();
}
