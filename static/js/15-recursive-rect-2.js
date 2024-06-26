// jonesangga, 2023
// github.com/jonesangga

let title = "Recursive-Rect-2";

let palette = ['#F0D8A8', '#3D1C00', '#86B8B1', '#F2D694', '#FA2A00'];

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    rectMode(CENTER);
    noLoop();
}

function draw() {
    background(random(palette));
    noFill();
    recc(width/2, height/2, width/2);
}

function recc(x, y, s) {
    if (s < 5) return;
    
    stroke(random(palette));
    fill(random(palette));
    strokeWeight(0.1*s);
    
    square(x, y, s);
    circle(x, y, s);
    recc(x-s/2, y-s/2, s/2);
    recc(x-s/2, y+s/2, s/2);
    recc(x+s/2, y-s/2, s/2);
    recc(x+s/2, y+s/2, s/2);
}
