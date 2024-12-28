let linearGradientLeft;
let linearGradientRight;

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

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}