// jonesangga, 2023
// github.com/jonesangga

let title = "Autumn";

let palette = ['#1C0113', '#6B0103', '#A30006', '#C21A01', '#F03C02'];

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    noLoop();
}

function draw() {
    background(255);
    noStroke();
    let n = 10;
    let s = width / n;
    let mult = 0.8;

    let grids = [];
    for (let i = 0; i < n; i++) {
        grids.push([]);
        for (let j = 0; j < n; j++) {
            grids[i][j] = new Grid(j*s+(s-s*mult)/2, i*s+(s-s*mult)/2, s*mult);
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            grids[i][j].display();
        }
    }
}

class Grid {
    constructor(x, y, d) {
        this.x = x;
        this.y = y;
        this.r = d / 2;
    }
    
    display() {
        push();
        translate(this.x + this.r, this.y + this.r);

        let points = 150;
        let off = 100;
        let x, y;
        
        fill(random(palette));
        beginShape();
        for (let i = 0; i <= points; i++) {
            x = this.r * cos(TWO_PI * i / points) + random(-off, off);
            y = this.r * sin(TWO_PI * i / points) + random(-off, off);
            vertex(x, y);
        }
        endShape(CLOSE);
        pop();
    }
}
