// jonesangga, 2023
// github.com/jonesangga

let title = "Residue-Design-4";

let m = 97;
// All generators of group of units U(97)
let generators = [
    5, 7, 10, 13, 14, 15, 17, 21, 23, 26,
    29, 37, 38, 39, 40, 41, 56, 57, 58, 59, 60,
    68, 71, 74, 76, 80, 82, 83, 84, 87, 90, 92,
];

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    noLoop();
}

function draw() {
    background('#FFBF65');
    noStroke();
    let n = 4;
    let s = width / n;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            design(j*s+s/2, i*s+s/2, s/2);
        }
    }
}

function design(x, y, r) {
    push();
    translate(x, y);
    fill(0);
    circle(0, 0, 2*r);
    
    fill('#FFBF65');
    let n = random(generators);
    let t = TWO_PI / (m-1);
    rotate(-t/2);
    beginShape();
    let k = 1;
    for (let i = 0; i < m-1; i++) {
        vertex(r*cos((k-1)*t), r*sin((k-1)*t));
        k = k*n % m;
    }
    endShape(CLOSE);
    pop();
}
