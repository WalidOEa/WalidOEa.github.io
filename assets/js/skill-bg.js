let icons = [];
let leftPositions = [];
let rightPositions = [];
let iconSize = 135;
let iconCount = 11;
let speed = 2.5;
let rightColumnOffset = 70;

function preload() {
  icons = [
    loadImage('assets/icons/icons8-javascript.svg'),
    loadImage('assets/icons/icons8-html-5.svg'),
    loadImage('assets/icons/icons8-css3.svg'),
    loadImage('assets/icons/icons8-haskell.svg'),
    loadImage('assets/icons/icons8-java.svg'),
    loadImage('assets/icons/icons8-c-sharp.svg'),
    loadImage('assets/icons/icons8-typescript.svg'),
    loadImage('assets/icons/icons8-python.svg'),
    loadImage('assets/icons/icons8-sqlite.svg'),
    loadImage('assets/icons/icons8-react-native.svg'),
    loadImage('assets/icons/icons8-tailwind-css.svg'),
  ];
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  
  setAsciiOptions({
    common: {
      fontSize: 4,
    },
    ascii: {
      renderMode: "brightness",
      characters: " .:-=+*#%@",
    }
  });

  for (let i = 0; i < iconCount; i++) {
    leftPositions.push(windowHeight + (i * iconSize));
    rightPositions.push(-(windowHeight + iconSize * (iconCount - i)));
  }
}

function draw() {
  background(0);
  noStroke();

  // Draw scrolling icons
  for (let i = 0; i < iconCount; i++) {
    leftPositions[i] -= speed;
    rightPositions[i] += speed;

    if (leftPositions[i] < -(windowHeight + iconSize)) {
      leftPositions[i] = max(leftPositions) + iconSize;
    }
    if (rightPositions[i] > (windowHeight * 0.5) + iconSize) {
      rightPositions[i] = min(rightPositions) - iconSize;
    }

    push();
    translate(-width / 2 + 50, leftPositions[i]);
    image(icons[i], 0, 0, iconSize, iconSize);
    pop();

    push();
    translate(width / 2 - (iconSize / 2) - 50 - rightColumnOffset, rightPositions[i]);
    image(icons[i], 0, 0, iconSize, iconSize);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}