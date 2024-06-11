let carCompany = [];
let cars= ["Toyota", "Nissan", "Kia", "Volkswagen", "Hyundai"];

function setup() {
  createCanvas(900, 700);
  carStatus();
}

function draw() {
  background(160,32,240);
  dataCar();
}

function carStatus() {
  // Making a random set of number of cars sold each day
  for (let i = 0; i < 5; i++) {
    carCompany.push(Math.floor(random(6000, 10000)));
  }
}

function dataCar() {
  let widthData = width / (carCompany.length * 2);
  let soldCars = max(carCompany);

  textAlign(CENTER, CENTER);
  textSize(25);
  textFont('Courier New')
  noStroke()
  fill(255);
  text("Most Number of  cars sold by each companies", width / 2, 50);

  for (let i = 0; i < carCompany.length; i++) {
    let heightData = map(carCompany[i], 0, soldCars, 0, height - 150);
    fill(238, 238, 238);
    stroke(255);
    rect((i + 1) * widthData * 2 - widthData, height - heightData - 50, widthData, heightData);

    fill(255);
    textSize(20);
    text(carCompany[i], (i + 1) * widthData * 2 - widthData / 2, height - heightData - 60);
    text(cars[i], (i + 1) * widthData * 2 - widthData / 2, height - 40);
  }
}

