// jonesangga, 2023
// github.com/jonesangga

let title = "Latin-Square";

let palette_ = [
    ['#F0D8A8', '#3D1C00', '#86B8B1', '#F2D694', '#FA2A00'],
    ['#00A5E3', '#8DD7BF', '#FF96C5', '#FF5768', '#FFBF65'],
];

let palette;
let X = []; // Rule  for permutations

// Create a simple latin square
let M = [];
for (let i = 0; i < 5; i++) {
    M.push([]);
    for (let j = 0; j < 5; j++) {
        M[i][j] = (i+j) % 5;
    }
}

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    rectMode(CENTER);
    noLoop();
}

function draw() {
    palette = random(palette_);
    background('#fffbe6');
	stroke(0);
    strokeWeight(1);

    //debug(M);
    createRule();
    //debug(X);
    permute();
    //debug(M);

    let n = 5; // number of row = column
	let s = width / (n+1); // length of the tile
	let mult = 0.8; // ratio of the design with the tile

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (random() < 0.5) {
				circles((i+1)*s, (j+1)*s, s*mult, M[i][j]);
			}
			else {
				squares((i+1)*s, (j+1)*s, s*mult, M[i][j]);
			}
		}
    }
    
    // Frame
    noFill();
    stroke(0);
    strokeWeight(40);
    rect(300, 300, 600, 600);
}

function createRule() {
    let t = int(random(3, 7)); // Number of alternating permutation
    X = [];
    for (let i = 0; i < t; i++) {
        X.push([]);
        X[i][0] = int(random(5));
        do {
            X[i][1] = int(random(5));
        } while (X[i][1] == X[i][0]);
    }
}

function permute() {
    let a, b;
    let t = X.length;
    for (let i = 0; i < t; i++) {
        a = X[i][0];
        b = X[i][1];
        // permute column a and b
        if (random() < 0.5) {
            for (let j = 0; j < 5; j++) {
                temp = M[a][j];
                M[a][j] = M[b][j];
                M[b][j] = temp;
            }
        }
        // permute row a and b
        else {
            for (let j = 0; j < 5; j++) {
                temp = M[j][a];
                M[j][a] = M[j][b];
                M[j][b] = temp;
            }
        }
    }
}

function debug(M) {
    print(M.map(m => m.join(' ')).join("\n"));
}

// The following two functions are from 1-study-grid.js

// Draw a circle design with center (x, y) and diameter d
// Draw a smaller circle inside
function circles(x, y, d, id) {
	push();
	translate(x, y);

    let color1 = palette[id];
	fill(color1);
	strokeWeight(2);
	circle(0, 0, d);

	let angle = random(-PI, PI); 
	rotate(angle);

	let color2 = random(palette);
	while (color2 == color1) {
		color2 = random(palette);
	}
	fill(color2);
	strokeWeight(1);
	circle(d/4, 0, d/2);

	pop();
}

// Draw a square design with center (x, y) and side d
// Draw a smaller square inside
function squares(x, y, d, id) {
	push();
	translate(x, y);

    let color1 = palette[id];
	fill(color1);
	strokeWeight(2);
	square(0, 0, d);
	
	// center coordinate for the second square
	let center2 = [[0, 0], [d/4, 0], [0, d/4], [-d/4, 0], [0, -d/4]];
	let q = random(center2);
	translate(q[0], q[1]);

	let color2 = random(palette);
	while (color2 == color1) {
		color2 = random(palette);
	}
	fill(color2);
	strokeWeight(1);
	square(0, 0, d/2);

	pop();
}
