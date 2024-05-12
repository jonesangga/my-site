// jonesangga, 2023
// github.com/jonesangga

let title = "Minimal-02";

let palette = ['#ffffff', '#f8e924'];

let pad = 40;

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    noLoop();
}

function draw() {
    let c = int(random(palette.length));
    background(palette[c]);
    translate(300, 300);

    let s = width - 2*pad;
    stroke(0);
    strokeWeight(1);
    fill(0);
    circle(0, 0, s);

    let r = s/2;
    let p = 16; // number of black column
    let q = 16; // number of line in colored columns
    let t;

    for (let j = 1; j < p; j++) {
        for (let i = 0; i < q; i++) {
            t = acos(((-s/2 + j*s/p)-(q/2)+i) / r);
            stroke(palette[c]);
            line(r*cos(t), r*sin(-t), -r*cos(t), r*sin(t));
            stroke(0);
            line(r*cos(t), -300, r*cos(t), r*sin(-t));
            line(r*cos(t), r*sin(t), r*cos(t), 300);
        }
    }

    noFill();
    stroke(0);
    strokeWeight(2);
    circle(0, 0, s);
}
