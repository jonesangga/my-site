// jonesangga, 2023
// github.com/jonesangga

let title = "020922-Variant";

let palette = ['#00A5E3', '#8DD7BF', '#FF96C5', '#FF5768', '#FFBF65'];

let pad = 30;
let scale = 0.95;

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    ellipseMode(CORNER);
    noLoop();
}

function draw() {
    background(random(palette))
    translate(pad, pad);

    let n = int(random(4, 6));
    let s = (width-2*pad) / n;
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
        this.d = d;
    }
    
    display() {
        strokeWeight(0.6);
        let s = this.d;
        
        push();
        translate(this.x, this.y);
        noStroke();
        fill(random(palette));

        let o = 10;
        beginShape();
        vertex(int(random(-o, o)), int(random(-o, o)));
        vertex(int(random(-o, o)), s+int(random(-o, o)));
        vertex(s+int(random(-o, o)), s+int(random(-o, o)));
        vertex(s+int(random(-o, o)), int(random(-o, o)));
        endShape(CLOSE);

        let coor;
        let q;
        while (s > 10) {
            fill(random(palette));
            circle(0, 0, s);
            coor = [[0, 0], [s-s*scale, 0], [0, s-s*scale], [s-s*scale, s-s*scale]];
            q = random(coor);
            translate(q[0], q[1]);
            s *= scale;
        }
        pop();
    }
}
