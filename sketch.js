var m;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255,179,224);
}

function draw() {
  m = random(10,60);
  fill(255,100)
  ellipse(mouseX,mouseY,m,m);
}