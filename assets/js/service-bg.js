let icons = [];
let leftPositions = [];
let rightPositions = [];
let iconSize = 110;
let iconCount = 13;
let speed = 3.2;
let rightColumnOffset = 70;

function preload() {
  icons = [
    loadImage('assets/icons/icons8-debian.png'),
    loadImage('assets/icons/icons8-docker.svg'),
    loadImage('assets/icons/icons8-cloudflare-24.png'),
    loadImage('assets/icons/icons8-gluetun.svg'),
    loadImage('assets/icons/icons8-jellyfin.svg'),
    loadImage('assets/icons/icons8-jellystat.png'),
    loadImage('assets/icons/icons8-plex.svg'),
    loadImage('assets/icons/icons8-overseerr.svg'),
    loadImage('assets/icons/icons8-radarr.svg'),
    loadImage('assets/icons/icons8-sonarr.svg'),
    loadImage('assets/icons/icons8-owncloud.svg'),
    loadImage('assets/icons/icons8-nginx.svg'),
    loadImage('assets/icons/icons8-postgresql.svg')
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