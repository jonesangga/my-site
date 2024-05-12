// jonesangga, 2023
// github.com/jonesangga

let title = "Sangaku-3";

let palette = ['#6f5643', '#cc6b49', '#d2a24c', '#ece6c2', '#73bda8'];
let bg = ['#ece6c2', '#73bda8'];

let n = 7; // number of sides of polygon
let d = 500;
let r = d/2;
let c;

let p = [];
let p1, p2, p3;
let d1, d2, d3;

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    noLoop();
}

function draw() {
    background(random(bg));
    divideCircle(n);
    c = int(random(palette.length));
    sangaku(300, 300, 0);
}

function sangaku(xpos, ypos, off) {
    push();
    translate(xpos, ypos);
    rotate(random(TWO_PI));
    noFill();
    strokeWeight(6);
    let t = 11;
    for (let i = 0; i < 10; i++) {
        stroke(random(palette));
        circle(0, 0, d+i*t);
    }

    let x, y, s, radius;
    
    noFill();
    for (let i = 0; i < n-1; i += 2) {
        p1 = p[(off+i) % n];
        p2 = p[(off+i+1) % n];
        p3 = p[(off+i+2) % n];

        d1 = p1.dist(p2);
        d2 = p2.dist(p3);
        d3 = p1.dist(p3);
        x = (d2*p1.x + d1*p3.x + d3*p2.x) / (d1 + d2 + d3);
        y = (d2*p1.y + d1*p3.y + d3*p2.y) / (d1 + d2 + d3);
        s = (d1+d2+d3) / 2;
        radius = 2 * sqrt((s-d1)*(s-d2)*(s-d3)/s);
        for (let j = 0; j < 10; j++) {
            stroke(random(palette));
            circle(x, y, radius+j*t);
        }
    }
    
    p1 = p[(off+n-1) % n];
    p2 = p[(off+0) % n];
    p3 = p[(off+2) % n];

    d1 = p1.dist(p2);
    d2 = p2.dist(p3);
    d3 = p1.dist(p3);
    x = (d2*p1.x + d1*p3.x + d3*p2.x) / (d1 + d2 + d3);
    y = (d2*p1.y + d1*p3.y + d3*p2.y) / (d1 + d2 + d3);
    s = (d1+d2+d3) / 2;
    radius = 2 * sqrt((s-d1)*(s-d2)*(s-d3)/s);
    for (let j = 0; j < 10; j++) {
        stroke(random(palette));
        circle(x, y, radius+j*t);
    }
    
    p1 = p[(off+n-1) % n];
    p2 = p[(off+2) % n];
    p3 = p[(off+4) % n];

    d1 = p1.dist(p2);
    d2 = p2.dist(p3);
    d3 = p1.dist(p3);
    x = (d2*p1.x + d1*p3.x + d3*p2.x) / (d1 + d2 + d3);
    y = (d2*p1.y + d1*p3.y + d3*p2.y) / (d1 + d2 + d3);
    s = (d1+d2+d3) / 2;
    radius = 2 * sqrt((s-d1)*(s-d2)*(s-d3)/s);
    for (let j = 0; j < 10; j++) {
        stroke(random(palette));
        circle(x, y, radius+j*t);
    }
    pop();
}

function divideCircle(n) {
    p = [];
    let k = TWO_PI / n;
    let t;
    for (let i = 0; i < n; i++) {
        t = i*k + random(PI/n);
        p[i] = createVector(r*cos(t), r*sin(t));
    }
}
