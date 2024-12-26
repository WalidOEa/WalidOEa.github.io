let jsIcon;
let htmlIcon;
let leftY = 0; 
let rightY = 0; 
let iconSize = 200; 

function preload() {
  jsIcon = loadImage('assets/icons/icons8-javascript.svg');
  htmlIcon = loadImage('assets/icons/icons8-html-5.svg'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();

  setAsciiOptions({
    common: {
        fontSize: 2,
    },
    ascii: {
      renderMode: "brightness",
      characters: " .:-=+*#%@",
    },
  });
}

function draw() {
  background(0, 0, 0);

  leftY -= 4;
  if (leftY < -height) {
    leftY = window.scrollY + window.innerHeight; 
  }
  
  rightY += 4;
  if (rightY > height) {  
    rightY = -(window.scrollY + window.innerHeight); 
  }

  push();
  translate(-width / 2 + 50, leftY); 
  image(jsIcon, 0, 0, iconSize, iconSize); 
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  push();
  translate(width / 2 - 50, rightY); 
  image(jsIcon, 0, 0, iconSize, iconSize);  
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  push();
  translate(-width / 2 + 50, leftY - iconSize);
  image(htmlIcon, 0, 0, iconSize, iconSize);  
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  push();
  translate(width / 2 - 50, rightY + iconSize); 
  image(htmlIcon, 0, 0, iconSize, iconSize); 
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}