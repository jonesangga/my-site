// jonesangga, 2023
// github.com/jonesangga

let title = "Residue-Design-2";

let palette = ['#00A5E3', '#8DD7BF', '#FF96C5', '#FF5768', '#FFBF65'];

let pad = 20;
let m, n, s;
let c;
let mult = 0.95;

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    noLoop();
}

function draw() {
    c = random(palette);
    background(c);
    let dim = int(random(3, 6));
    s = (width -2 *pad) / dim;
    m = 53
    n = int(random(2, m/2));

    for (let i = 0; i < dim; i++) {
        for (let j = 0; j < dim; j++) {
            design(pad+j*s+s/2, pad+i*s+s/2, s*mult/2, n);
        }
    }
}

function design(x, y, r, n) {
    push();
    translate(x, y);
    noStroke();
    fill(0);
    circle(0, 0, 2*r);
    
    stroke(c);
    noFill();
    let t = TWO_PI / (m-1);
    rotate(-t/2);
    let k;
    for (let i = 1; i < m; i++) {
        k = (i * n) % m;
        line(r*cos(i*t), r*sin(i*t), r*cos(k*t), r*sin(k*t)); 
    }
    pop();
}
