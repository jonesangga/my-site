// jonesangga, 2023
// github.com/jonesangga

let title = "Paint";

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
    noStroke();

    let n = int(random(3, 9));
    let s = width / n;
    let mult = 0.8;
    let grids = [];
    
    for (let i = 0; i < n; i++) {
        grids.push([]);
        for (let j = 0; j < n; j++) {
            grids[i].push( new Grid(
                i*s+(s-s*mult)/2,
                j*s+(s-s*mult)/2,
                s*mult
            ) );
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
        fill(random(palette));
        square(0, 0, 2 * this.r);

        let points = int(random(10, 30));
        let x, y;
        let off = 5;
        off = int(random(10, 20));
        
        fill(random(palette));
        beginShape();
        for (let i = 0; i <= points; i++) {
            x = this.r * cos(TWO_PI*i/points) + random(-off, off);
            y = this.r * sin(TWO_PI*i/points) + random(-off, off);
            vertex(x, y);
        }
        endShape(CLOSE);
        pop();
    }
}
