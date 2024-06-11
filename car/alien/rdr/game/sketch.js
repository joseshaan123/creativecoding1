let colors;
let Challenges = 1;
let maximumChallenges = 5;
let fail = false;
let win = false;
let colorOptions = [];
let title = 'title'; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('black');

    if (title=='title'){
      pageTitle();
}
    if (title=='start'){
      pageStart();
    }
    if (title=='play'){
     pageGame();
}
    if (title=='end'){
      showEndPage();
    }
  
}

function pageTitle() {
  textAlign(CENTER, CENTER);
  textSize(48);
  fill(255);
  text('RGB Color Guessing Game', width / 2, height / 3);
  textSize(24);
  fill('red')
  text('Press ENTER to start', width / 2, height / 2);
}

function pageStart() {
  textAlign(CENTER, CENTER);
  textSize(36);
  fill(255);
  text('Rules:', width / 2, height / 4);
  textSize(24);
  text('Find the Color after guessing the color code, Correctly guess all the 5 challenges to win', width / 2, height / 3);
  fill('red')
  text('Enter to proceed' + Challenges, width / 2, height / 2);
}

function showEndPage() {
  fill(255)
  textAlign(CENTER, CENTER);
  textSize(48);
  if (win) {
    fill(0, 255, 0);
    text('Congratulations! You won!', width / 2, height / 1);
  } else {
    fill(255, 0, 0);
    text('You Lost! Refresh to try again.', width / 2, height / 2);
     text('Press Backspace to Restart', width / 2, height / 3);
    
  }
}

function pageGame() {
  if (fail) {
    title = 'end';
    return;
  }

  if (win) {
    title = 'end';
    return;
  }

  display();
  showQuestion();
  showChallenges();
}

function newChallenges() {
  colorOptions = [];
  colors = color(random(255), random(255), random(255));
  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      colorOptions.push(colors);
    } else {
      colorOptions.push(color(random(255), random(255), random(255)));
    }
  }
  shuffle(colorOptions, true);
}

function display() {
  for (let i = 0; i < colorOptions.length; i++) {
    fill(colorOptions[i]);
    rect((i * width) / 3, height / 2 - 50, width / 3, 100);
  }
}

function showQuestion() {
  textSize(24);
  fill(255);
  textAlign(CENTER, TOP);
  
  text('Guess the real RGB color(' + red(colors) + ', ' + green(colors) + ', ' + blue(colors) + ')?', width / 2, 50);
}

function showChallenges() {
  textSize(24);
  fill(255);
  textAlign(LEFT, TOP);
  text('Challenges: ' + Challenges, 10, 10);
}

function mousePressed() {
  if (title !== 'play') return;

  for (let a = 0; a < colorOptions.length; a++) {
    if (mouseX > (a * width) / 3 && mouseX < ((a + 1) * width) / 3 &&
        mouseY > height / 2 - 50 && mouseY < height / 2 + 50) {
      if (colorOptions[a] === colors) {
        Challenges++;
        if (Challenges > maximumChallenges) {
          win = true;
        } else {
          newChallenges();
        }
      } else {
        fail = true;
      }
      break;
    }
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (title === 'title') {
      title = 'start';
    } else if (title === 'start') {
      title = 'play';
      newChallenges();
      if (keyCode === BACKSPACE) {
    title="title"}
    } 
  }
    
  else if (keyCode === BACKSPACE) {
    title="title"
    }
    
}
