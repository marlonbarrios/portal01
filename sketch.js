let canvas;
let steps = 25;
let speed = 4;


function setup() {
  createCanvas(windowWidth, windowHeight);
  mbsFramework();
  credits();

}

// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Render loop that draws shapes with p5
function draw() {

  background(255, 25);
  if (mouseIsPressed) {
    background(255);
  }

  noFill();
  strokeCap(ROUND);
  let size = width / steps;

  for (let i = 0; i < steps; i++) {
    for (let j = 0; j < steps; j++) {
      let x = i * size;
      let y = j * size;
      let d = dist(x, y, width / 2, height / 2);
      let offsetX = map(d, 0, width, -PI, PI);
      let offsetY = map(d, 0, height, -PI, PI);
      strokeWeight(d * 0.01);
      if (key == '1') {
        speed = 1;}
      if (key == '2') {
        speed = 4;}
      if (key == '3') {
        speed = 6;}
      if (key == '4') {
        speed = 8;}
      if (key == '5') {
        speed = 10;}
      let a = cos(frameCount * 0.04 + offsetX) * speed;
      let b = sin(frameCount * 0.04 + offsetY) * speed;
      push();
      translate(x + size * 0.5, y + size * 0.5);
      rotate(a);
      noFill()
      line(-size, 0, size * 0.08, 1);
      rotate(b);
      line(0, -size, 0, size * 0.08, 1);
      pop();
    }
  }

}

function keyPressed() {
  let m = month();
  let d = day();
  let y = year();
  let t = hour() + ':' + minute();
  if (key == 'S' || key == 's')
    saveCanvas(canvas, 'canvas' + m + d + y + t, 'png');
 
}

function windowResized() {
  const windowWidth = window.innerWidth;
  if (windowWidth < 900) {
    resizeCanvas(windowWidth * 0.85, windowWidth * 0.85);
    canvas.style("margin", "auto");
    canvas.style("margin-top", "10%");

  } else {
    resizeCanvas(windowWidth, windowWidth);
  }
}

function mbsFramework() {
  //template for canvas while printing and exporting/exhition on web/minimal
  canvas = createCanvas(1024, 1024); 
  canvas.style("margin", "auto");
  canvas.style("margin-top", "5%");
  canvas.style("display", "flex");
  canvas.style("justify-content", "center");
  canvas.style("align-items", "center");
  canvas.style("border-radius", "10px");
  canvas.style("position", "relative");
  canvas.style("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
  canvas.style("zoom", "0.5");
  canvas.style('dpi', '300');
  canvas.style('bleed', '1/8');
  cursor(CROSS);
}

function credits() {
  //credits
  createP("Portal 01");
  createP("Grid of 50000 spinning lines coordinated by waves generating a vortex in the center of the canvas. Plays better in desktop computers.");
  createP("Click on the canvas to only see the lines and press '1' to '5' to change the speed of the lines");
  createP("Press 's' to save a png image");
  var link = createA("https://marlonbarrios.github.io/", "Programmed by Marlon Barrios Solano");
  createElement('title', 'Portal 01')
  var allPs = selectAll("p")
  for (var i = 0; i < allPs.length; i++) {
    allPs[i].style("font-family", "Helvetica");
    allPs[i].style("justify-content", "center");
    allPs[i].style("align-items", "center");
    allPs[i].style("position", "relative");
    allPs[i].style("text-align", "center");
    allPs[i].style("display", "flex");
    allPs[i].style("font-size", "15px");
    allPs[i].style("color", "black");
    allPs[i].style("margin", "8px");
  }
  link.style("font-family", "Helvetica");
  link.style("justify-content", "center");
  link.style("align-items", "center");
  link.style("position", "relative");
  link.style("text-align", "center");
  link.style("display", "flex");
  link.style("font-size", "15px");
  link.style("color", "black");
  link.style("text-decoration", "none");
}
