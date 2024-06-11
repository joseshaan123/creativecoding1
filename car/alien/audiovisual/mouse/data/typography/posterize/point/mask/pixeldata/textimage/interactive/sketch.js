let backgroundColor = []; 
let numColors = 70; 
let colorChangeSpeed = 0.2; 
let customFont;
let mic, fft; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(windowHeight / 15);
  textAlign(CENTER, CENTER);

 
  for (let i = 0; i < numColors; i++) {
    backgroundColor.push(color(random(232), random(255), random(255)));
  }

  customFont = loadFont('Scrabbles.ttf');

 
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  textFont(customFont); 


  for (let i = 0; i < backgroundColor.length; i++) {
    let nextColorIndex = (i + 1) % backgroundColor.length;
    backgroundColor[i] = lerpColor(
      backgroundColor[i],
      backgroundColor[nextColorIndex],
      colorChangeSpeed
    );
  }

  
  for (let y = 0; y < windowHeight; y += windowHeight / 10) {
    for (let x = 0; x < windowWidth; x += windowWidth / 10) {
      let colorIndex = int(floor(x / (windowWidth / 10))) % backgroundColor.length;
      fill(backgroundColor[colorIndex]);
      noStroke();
      rect(x, y, windowWidth / 10, windowHeight / 10); 
    }
  }


  let spectrum = fft.analyze(); 
  let numBars = 20; 
  let barWidth = windowWidth / numBars;

  for (let i = 0; i < numBars; i++) {
    let amplitude = spectrum[i*5]; 
    let barHeight = map(amplitude, 0, 255, 0, height/1); 

    let barColor = color(map(i, 0, numBars, 0, 255), 100, 50 + amplitude/2); 

    fill(barColor);
    rect(i * barWidth, height/2 - barHeight/2, barWidth, barHeight); 
  }

  
  textSize(80);
  fill(0); 
  text("Welcome to Bath Spa University", windowWidth / 2, windowHeight / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  backgroundColor = [];
  for (let i = 0; i < numColors; i++) {
    backgroundColor.push(color(random(99), random(255), random(255)));
  }
}

function mousePressed() {
  
  for (let i = 0; i < backgroundColor.length; i++) {
    let hue = random(235);
    backgroundColor[i] = color(hue, map(i, 0, backgroundColor.length, 0, 255), 235); 
  }
}
