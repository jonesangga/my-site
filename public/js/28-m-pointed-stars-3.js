// jonesangga, 2023
// github.com/jonesangga

let title = "m-Pointed-Stars-3";

let palette = ['#99B898', '#FECEA8', '#FF847C', '#E84A5F', '#2A363B'];

let pad = 40;

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    noLoop();
}

function draw() {
    background(palette[1]);
    strokeWeight(2);
    let n = 4;
    let s = (width - 2*pad) / n;
    let mult = 0.75;
    let m = 41;
    let t = 0.9;
    let step;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            step = int(random(13, 19));
            star(pad+j*s+s/2, pad+i*s+s/2, s*mult/2, m, step, t);
            star2(pad+j*s+s/2, pad+i*s+s/2, s*mult/2, m, step);
        }
    }
}

function star(x, y, r, m, step, t) {
    push();
    translate(x, y);
    fill(0);
    stroke(palette[2]);
    circle(0, 0, 2*r);
    fill(random(palette));
    stroke(random(palette));
    beginShape();
    let curr = 0;
    for (let i = 0; i < m; i++) {
        vertex(r * cos(TWO_PI*curr/m), r * sin(TWO_PI*curr/m));
        curr = (curr + step) % m;
        r += t;
    }
    endShape(CLOSE);
    pop();
}

function star2(x, y, r, m, step) {
    push();
    translate(x, y);
    fill(random(palette));
    stroke(random(palette));
    beginShape();
    let curr = 0;
    for (let i = 0; i < m; i++) {
        vertex(r * cos(TWO_PI*curr/m), r * sin(TWO_PI*curr/m));
        curr = (curr + step) % m;
    }
    endShape(CLOSE);
    pop();
}
