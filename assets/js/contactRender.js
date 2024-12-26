let linearGradientLeft;
let linearGradientRight;

let chevronX, chevronY;
let chevronWidth = 40;
let chevronHeight = 40;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  setAsciiOptions({
    ascii: {
      renderMode: "brightness",
      characters: " .:-=+*#%@",
    },
    edge: {
      enabled: true,
      characterColorMode: 1,
      sobelThreshold: 0.1,
      sampleThreshold: 16,
    },
  });

  linearGradientLeft = addAsciiGradient("linear", 0, 127, "contact   ", {
    direction: 1,
    angle: 0,
    speed: 0.2,
  });

  linearGradientRight = addAsciiGradient("linear", 0, 127, "tactnoc   ", {
    direction: 1,
    angle: 0,
    speed: 0.2,
  });
}

function draw() {
  background(150, 0, 0);

  noStroke();
  push();
  rotateX(radians(frameCount * 3));
  rotateY(radians(frameCount));
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  linearGradientLeft.angle += 0.35;
  linearGradientRight.angle -= 0.35;

  if (frameCount % 70 === 0) {
    linearGradientLeft.enabled = !linearGradientLeft.enabled;
  }

  chevronX = width / 2 - 100; 
  chevronY = height / 2 - 100; 
  push();
  translate(chevronX, chevronY, 0);
  fill(0); 
  beginShape();
  vertex(0, 0); 
  vertex(-chevronWidth, chevronHeight / 2);
  vertex(0, chevronHeight); 
  endShape(CLOSE);
  pop();
}

function mouseMoved() {
  let mouseXCanvas = mouseX - width / 2;
  let mouseYCanvas = mouseY - height / 2;

  if (
    mouseXCanvas > chevronX - chevronWidth &&
    mouseXCanvas < chevronX &&
    mouseYCanvas > chevronY &&
    mouseYCanvas < chevronY + chevronHeight
  ) {
    cursor('pointer');
  } else {
    cursor('default');
  }
}

function mousePressed() {
  let mouseXCanvas = mouseX - width / 2; 
  let mouseYCanvas = mouseY - height / 2; 

  if (
    mouseXCanvas > chevronX - chevronWidth &&
    mouseXCanvas < chevronX &&
    mouseYCanvas > chevronY &&
    mouseYCanvas < chevronY + chevronHeight
  ) {
    window.location.href = "index.html";
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}