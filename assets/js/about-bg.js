function preload() {
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  canvas.style('position', 'absolute');
}

function draw() {
  background(0);
  noStroke();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}