let img;

function preload() {
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  canvas.style('position', 'absolute');

  setAsciiOptions({
    common: {
      fontSize: 4,
    },
    ascii: {
      renderMode: "brightness",
      characters: " .:-=+*#%@",
    }
  });
}

function draw() {
  background(0);
  noStroke();

  push();
  translate(-width / 2, -height / 2); 
  image(img, width / 2 - img.width / 2, height / 2 - img.height / 2);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}