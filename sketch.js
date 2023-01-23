var maxRadius = 600;
var minRadius = 0;

// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
    let hr = map(hour(), 0, 24, 0, maxRadius);
    let min = map(minute(), 0, 60, 0, maxRadius-100);
    let sec = map(second(), 0, 60, 0, maxRadius-100);
  
    background(225);
    textSize(32);
  
    var centerX = width/2;
    var centerY = height/2;
  
    noStroke()
    fill(255,50,50,100);
    ellipse(centerX, centerY, hr);
  
    fill(255,255,0,100);
    ellipse(centerX+100, centerY+100, min);
    
    fill(0,0,255,100);
    ellipse(centerX-100, centerY, sec);
    
}