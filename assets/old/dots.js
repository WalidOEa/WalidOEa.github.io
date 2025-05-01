const canvas = document.getElementById("dotsOverlay");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dotRadius = 1;
const spacing = 12; 

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let x = spacing / 2; x < canvas.width; x += spacing) {
    for (let y = spacing / 2; y < canvas.height; y += spacing) {
      ctx.beginPath();
      ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
      ctx.fillStyle = "white"; 
      ctx.fill();
    }
  }
}

drawGrid();

// Redraw grid on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawGrid();
});