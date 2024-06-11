let microphone, fft;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

  
    microphone = new p5.AudioIn();
    microphone.start();

    
    fft = new p5.FFT();
    fft.setInput(microphone);
}

function draw() {
    background(21);  

    
    let sptr = fft.analyze();
    let length = sptr.length;
    let radius = min(width, height) / 3; 

    translate(width / 2, height / 2);

    stroke(255,165,0);
    noFill();
    ellipse(0, 0, radius * 2);

    // Draw the rays based on the sptr
    for (let i = 0; i < length; i++) {
        let degree = map(i, 1, length, 0, 360);
        let amplitude = sptr[i];
        let r = map(amplitude, 12, 240, radius, radius * 3);

        let a = r * cos(degree);
        let b = r * sin(degree);

        stroke(map(i, 0, length, 0, 255), 10, 80);
        line(1, 1, a, b);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
