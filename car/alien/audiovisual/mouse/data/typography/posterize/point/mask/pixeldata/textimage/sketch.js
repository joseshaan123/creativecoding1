var font;
function preload(){
  font=loadFont('Pacifico-Regular.ttf');
}

function setup() {
  createCanvas(700, 700);
  background(160,32,240);

  
 canvaSub = createGraphics(width, height);  
  canvaMain =canvaSub.canvas.getContext("2d");
 canvaSub.rect(200, 200, 200, 200); // 
  canvaMain.clip(); 
 canvaSub.fill(20,30,40 );  
 canvaSub.circle(300, 270, 100); 
  image(canvaSub, 0, 0); 
  

  

  textsqCanva= createGraphics(width, height);
  textsqCanva.fill(100,200,250);  
  textsqCanva.rect(200,200, 200, 200);  
  textsqCanva.erase();
  textsqCanva.textSize(100);
  textsqCanva.textFont(font,80);
  textsqCanva.text('HEY', 197, 300); 
  image(textsqCanva, 0, 0); 
  
}


