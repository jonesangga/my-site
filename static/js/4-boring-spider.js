// jonesangga, 2023
// github.com/jonesangga

let title = "Boring-Spider";

let palette = ['#A92420', '#D1913E', '#0E3160', '#135390'];

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    noLoop();
}

function draw() {
    background('#fffbe6');
    strokeWeight(0.5);

    let n = int(random(2, 8)); // number of row = column
    let s = width / (n+1); // length of the tile
    let mult = 0.7; // ratio of the design with the tile

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            spider((i+1)*s, (j+1)*s, s*mult);
        }
    }
}

// Draw a spider web on a square grid
function spider(x, y, size) {
    push();
    translate(x-size/2, y-size/2);
    noFill();

    let m = 3; // number of points on each side of square
    let t = size / (m+1);

    let p = [[], [], [], []]; // all points on square sides
    for (let i = 0; i < m; i++) {
        p[0].push([(i+1)*t, 0]);
        p[1].push([size, (i+1)*t]);
        p[2].push([(i+1)*t, size]);
        p[3].push([0, (i+1)*t]);
    }
    
    let r = 5;
    stroke(random(palette));
    for (let i = 0; i < m; i++) {
        circle(p[0][i][0], p[0][i][1], r);
        circle(p[1][i][0], p[1][i][1], r);
        circle(p[2][i][0], p[2][i][1], r);
        circle(p[3][i][0], p[3][i][1], r);
    }
  
    let side1 = 1;
    let point1 = int(random(m));
    let side2, point2;

    for (let i = 1; i < 30; i++) {
        side2 = int(random(4));
        while (side1 == side2) {
            side2 = int(random(4));
        }

        point2 = int(random(m));  
        stroke(random(palette));
        line(p[side1][point1][0], p[side1][point1][1], 
            p[side2][point2][0], p[side2][point2][1]
        );

        point1 = point2;
        side1 = side2;
    }
    pop();
}
