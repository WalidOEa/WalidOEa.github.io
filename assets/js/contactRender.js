let linearGradient;

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

  linearGradient = addAsciiGradient("linear", 0, 127, "contact  ", {
    direction: 1,
    angle: 0,
    speed: 0.,
  });
}

function draw() {
  background(150, 0, 0);
  noStroke();
  rotateX(radians(frameCount * 3));
  rotateY(radians(frameCount));
  directionalLight(255, 255, 255, 0, 0, -1);
  torus(200, 50);

  linearGradient.angle += 0.45;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
