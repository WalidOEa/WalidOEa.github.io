// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

let angleX = 0;
let angleY = 0;
let font;

function preload() {
    font = loadFont("assets/fonts/Slabo27px-Regular.ttf"); 
    loadAsciiFont("assets/fonts/Px437_DOS-V_re_JPN12.ttf");
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0, 0);
  
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
    
    for (let zOffset = 5; zOffset < 60; zOffset += 5) { 
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

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// nav hamburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
})

// close hamburger when link is clicked

// select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => link.addEventListener("click", () => {
    ul.classList.remove("show");
})
);
