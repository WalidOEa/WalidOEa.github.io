let jsIcon;
let htmlIcon;
let cssIcon;
let javaIcon;
let cSharpIcon;
let tsIcon;
let pythonIcon;
let sqliteIcon;
let reactIcon;
let leftY = 0; 
let rightY = 0; 
let iconSize = 140; 

function preload() {
  jsIcon = loadImage('assets/icons/icons8-javascript.svg');
  htmlIcon = loadImage('assets/icons/icons8-html-5.svg'); 
  cssIcon = loadImage('assets/icons/icons8-css3.svg');
  haskellIcon = loadImage('assets/icons/icons8-haskell.svg');
  javaIcon = loadImage('assets/icons/icons8-java.svg');
  cSharpIcon = loadImage('assets/icons/icons8-c-sharp.svg');
  tsIcon = loadImage('assets/icons/icons8-typescript.svg');
  pythonIcon = loadImage('assets/icons/icons8-python.svg');
  sqliteIcon = loadImage('assets/icons/icons8-sqlite.svg');
  reactIcon = loadImage('assets/icons/icons8-react-native.svg');
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

  leftY -= 2.5;
  if (leftY < -height) {
    leftY = window.scrollY + window.innerHeight; 
  }
  
  rightY += 2.5;
  if (rightY > height) {  
    rightY = -(window.scrollY + window.innerHeight); 
  }

  // js icon
  push();
  translate(-width / 2 + 50, leftY); 
  image(jsIcon, 0, 0, iconSize, iconSize); 
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  push();
  translate(width / 2 - 50, rightY); 
  image(jsIcon, -(jsIcon.width + 100), 0, iconSize, iconSize);  
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  // html icom
  push();
  translate(-width / 2 + 50, leftY - iconSize);
  image(htmlIcon, 0, 0, iconSize, iconSize);  
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  push();
  translate(width / 2 - 50, rightY + iconSize); 
  image(htmlIcon, -(htmlIcon.width + 100), 0, iconSize, iconSize); 
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  // css icon
  push();
  translate(-width / 2 + 50, leftY - (iconSize * 2));
  image(cssIcon, 0, 0, iconSize, iconSize);  
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  push();
  translate(width / 2 - 50, rightY + (iconSize * 2)); 
  image(cssIcon, -(cssIcon.width + 100), 0, iconSize, iconSize); 
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  // haskell icon
  push();
  translate(-width / 2 + 50, leftY - (iconSize * 3));
  image(haskellIcon, 0, 0, iconSize, iconSize);  
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  push();
  translate(width / 2 - 50, rightY + (iconSize * 3)); 
  image(haskellIcon, -(cssIcon.width + 100), 0, iconSize, iconSize); 
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  // java icon
  push();
  translate(-width / 2 + 50, leftY - (iconSize * 4));
  image(javaIcon, 0, 0, iconSize, iconSize);  
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  push();
  translate(width / 2 - 50, rightY + (iconSize * 4)); 
  image(javaIcon, -(cssIcon.width + 100), 0, iconSize, iconSize); 
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  // c sharp icon
  push();
  translate(-width / 2 + 50, leftY - (iconSize * 5));
  image(cSharpIcon, 0, 0, iconSize, iconSize);  
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  push();
  translate(width / 2 - 50, rightY + (iconSize * 5)); 
  image(cSharpIcon, -(cssIcon.width + 100), 0, iconSize, iconSize); 
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  // typescript icon
  push();
  translate(-width / 2 + 50, leftY - (iconSize * 6));
  image(tsIcon, 0, 0, iconSize, iconSize);  
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  push();
  translate(width / 2 - 50, rightY + (iconSize * 6)); 
  image(tsIcon, -(cssIcon.width + 100), 0, iconSize, iconSize); 
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  // python icon
  push();
  translate(-width / 2 + 50, leftY - (iconSize * 7));
  image(pythonIcon, 0, 0, iconSize, iconSize);  
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  push();
  translate(width / 2 - 50, rightY + (iconSize * 7)); 
  image(pythonIcon, -(cssIcon.width + 100), 0, iconSize, iconSize); 
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  // sqlite icon
  push();
  translate(-width / 2 + 50, leftY - (iconSize * 8));
  image(sqliteIcon, 0, 0, iconSize, iconSize);  
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  push();
  translate(width / 2 - 50, rightY + (iconSize * 8)); 
  image(sqliteIcon, -(cssIcon.width + 100), 0, iconSize, iconSize); 
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  // react icon
  push();
  translate(-width / 2 + 50, leftY - (iconSize * 9));
  image(reactIcon, 0, 0, iconSize, iconSize);  
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();

  push();
  translate(width / 2 - 50, rightY + (iconSize * 9)); 
  image(reactIcon, -(cssIcon.width + 100), 0, iconSize, iconSize); 
  directionalLight(255, 255, 255, 0, 0, -1);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}