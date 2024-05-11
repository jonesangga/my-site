// jonesangga, 2023
// github.com/jonesangga

let title = "Geometric-Series-2";

let palette = ['#F0D8A8', '#86B8B1', '#F2D694', '#FA2A00'];

let pad = 20;
let mult = 0.9;

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    colorMode(HSB);
    noLoop();
}

function draw() {
    background(0);
    translate(pad, pad);
    let s = width - 2*pad;
    geometric(0, 0, s);
}

function geometric(x, y, s) {
    if (s < 25) return;

    let c1 = random(palette);
    fill(c1);
    rect(x, y, s/2, s);
    rectMode(RADIUS);
    let t = s/2;
    let count = 1;
    while(t > s/15) {
        fill(hue(c1), saturation(c1), brightness(c1)-10*count);
        count += 0.5;
        t *= mult;
        rect(x+s/4, y+s/2, t/2, t);
    }
    rectMode(CORNER);
    
    let c2 = random(palette);
    while (c1 == c2) {
        c2 = random(palette);
    }
    fill(c2);
    rect(x+s/2, y+s/2, s/2, s/2);
    rectMode(RADIUS);
    t = s/2;
    count = 1;
    while(t > s/15) {
        fill(hue(c2), saturation(c2), brightness(c2)-10*count);
        count += 0.5;
        t *= mult;
        rect(x+3*s/4, y+3*s/4, t/2, t/2);
    }
    rectMode(CORNER);
    
    geometric(x+s/2, y, s/2);
}
