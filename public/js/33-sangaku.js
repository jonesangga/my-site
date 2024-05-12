// jonesangga, 2023
// github.com/jonesangga

let title = "Sangaku";

let palette = ['#6f5643', '#cc6b49', '#d2a24c', '#ece6c2', '#73bda8'];

let n = 5; // number of sides of polygon
let r = 250;

let p = [];
let p1, p2, p3;
let d1, d2, d3;
let x, y, s, radius;

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    noLoop();
}

function draw() {
    background(random(palette));
    strokeWeight(1);
    stroke(255);
    translate(300, 300);
    rotate(random(TWO_PI));
    noFill();
    fill(random(palette));
    circle(0, 0, 2*r);

    divideCircle(n);

    let c = int(random(palette.length));

    // draw triangle which has 2 sides near circle arc
    for (let i = 0; i < n-1; i += 2) {
        p1 = p[i % n];
        p2 = p[(i+1) % n];
        p3 = p[(i+2) % n];
         
        fill(palette[++c % palette.length]);
        triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);

        d1 = p1.dist(p2);
        d2 = p2.dist(p3);
        d3 = p1.dist(p3);
        x = (d2*p1.x + d1*p3.x + d3*p2.x) / (d1 + d2 + d3);
        y = (d2*p1.y + d1*p3.y + d3*p2.y) / (d1 + d2 + d3);
        s = (d1+d2+d3) / 2;
        radius = 2 * sqrt((s-d1)*(s-d2)*(s-d3)/s);
        fill(palette[++c % palette.length]);
        circle(x, y, radius);
    }

    p1 = p[n-1];
    p2 = p[0];
    p3 = p[2];
    fill(palette[++c % palette.length]);
    triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);

    d1 = p1.dist(p2);
    d2 = p2.dist(p3);
    d3 = p1.dist(p3);
    x = (d2*p1.x + d1*p3.x + d3*p2.x) / (d1 + d2 + d3);
    y = (d2*p1.y + d1*p3.y + d3*p2.y) / (d1 + d2 + d3);
    s = (d1+d2+d3) / 2;
    radius = 2 * sqrt((s-d1)*(s-d2)*(s-d3)/s);
    fill(palette[++c % palette.length]);
    circle(x, y, radius);
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
