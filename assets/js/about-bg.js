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

    // Add a fixed black rectangle for the text background
    push();
    translate(0, 0, -50); // Slightly in the back
    fill(0);
    noStroke();
    plane(width, height); // Black background rectangle
    pop();

    // Draw text "SKILLS" at the top
    push();
    translate(0, -height / 2 + 100, 0); // Top of the canvas
    textFont(font);
    textSize(48);
    fill(255); // White color
    textAlign(CENTER, CENTER);
    text("SKILLS", 0, 0);
    pop();

    // Draw text "PROJECTS" at the bottom
    push();
    translate(0, height / 2 - 100, 0); // Bottom of the canvas
    textFont(font);
    textSize(48);
    fill(255); // White color
    textAlign(CENTER, CENTER);
    text("PROJECTS", 0, 0);
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}