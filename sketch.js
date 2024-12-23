let angleX = 0;
let angleY = 0;
let font;

function preload() {
  font = loadFont('SpaceGrotesk-VariableFont_wght.ttf'); 
  loadAsciiFont('Px437_DOS-V_re_JPN12.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  setAsciiOptions({
    common: {
      fontSize: 8,
    },
    ascii: {
      enabled: true,
      characters: ".:-=+*#%@",
    },
    edge: {
      enabled: true,
      characters: "-/|\\-/|\\",
      sobelThreshold: 0.15,
      sampleThreshold: 16,
    }
  });
}

function draw() {
  background(0);
  noStroke();
  directionalLight(255, 255, 255, 0, 0, -1);

  let centerX = width / 2;
  let centerY = height / 2;

  angleX = map(mouseY, 0, height, PI / 4, -PI / 4);
  angleY = map(mouseX, 0, width, -PI / 4, PI / 4); 

  rotateX(angleX);
  rotateY(angleY);

  push();
  translate(0, 0, -100); 
  fill(0); 
  noStroke();
  plane(width, height); 
  pop();

  push();
  translate(0, 0, 0);
  textFont(font);
  textSize(300); 
  textStyle(BOLD); 
  fill(255);  
  textAlign(CENTER, CENTER);
  text("omar", 0, 0); 
  pop();
  
  for (let zOffset = 5; zOffset < 75; zOffset += 5) { 
    push();
    translate(0, 0, zOffset); 
    fill(255, 255, 255, 150); 
    textFont(font);
    textSize(300); 
    textStyle(BOLD); 
    textAlign(CENTER, CENTER);
    text("omar", 0, 0);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}