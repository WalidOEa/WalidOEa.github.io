let icons = [];
let leftPositions = [];
let rightPositions = [];
let iconSize = 135;
let iconCount = 15;
let speed = 2.5;
let rightColumnOffset = 70;

function preload() {
  icons = [
    loadImage('assets/icons/debian.png'),
    loadImage('assets/icons/jellyfin.svg'),
    loadImage('assets/icons/plex.svg'),
    loadImage('assets/icons/radarr.svg'),
    loadImage('assets/icons/sonarr.svg'),
    loadImage('assets/icons/owncloud.svg'),
    loadImage('assets/icons/nginx.svg'),
    loadImage('assets/icons/postgresql.svg'),
    loadImage('assets/icons/icons8-docker.svg'),
    loadImage('assets/icons/icons8-html-5.svg')
  ];
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