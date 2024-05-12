// jonesangga, 2023
// github.com/jonesangga

let title = "Minimal-01";

let palette = ['#d1439e', '#f8e924', '#1da5be', '#38cd2c'];

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
    let p = 10; // number of black column
    let q = 16; // number of line in colored columns
    let t;
    stroke(palette[c]);

    for (let j = 1; j < p; j++) {
        for (let i = 0; i < q; i++) {
            if (random() < 0.9) {
                t = acos(((-s/2 + j*s/p)-(q/2)+i) / r);
                line(r*cos(t), r*sin(-t), r*cos(t), r*sin(t));
            }
        }
    }

    noFill();
    stroke('#ff0000');
    strokeWeight(12);
    circle(0, 0, s+10);
}
