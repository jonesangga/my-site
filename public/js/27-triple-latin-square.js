// jonesangga, 2023
// github.com/jonesangga

let title = "Triple-Latin-Square";

let palette_ = [
    ['#00A5E3', '#8DD7BF', '#FF96C5', '#FF5768', '#FFBF65'],
    ['#FC354C', '#29221F', '#13747D', '#0ABFBC', '#FCF7C5'],
    ['#AAFF00', '#FFAA00', '#FF00AA', '#AA00FF', '#00AAFF'],
];

let palette;
let X = []; // Rule  for permutations of M
let Y = []; // Rule  for permutations of N
let Z = []; // Rule  for permutations of O

// Create a simple latin square
let M = [];
let N = [];
let O = [];
for (let i = 0; i < 5; i++) {
    M.push([]);
    N.push([]);
    O.push([]);
    for (let j = 0; j < 5; j++) {
        M[i][j] = (i+j) % 5;
        N[i][j] = (i+j) % 5;
        O[i][j] = (i+j) % 5;
    }
}

let pad = 60;

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    textFont("monospace", 15);
    rectMode(CENTER);
    noLoop();
}

function draw() {
    palette = random(palette_);
    background('#fffbe6');
	stroke(0);
    strokeWeight(1);

    createRule();
    //debug(X);
    //debug(Y);
    //debug(Z);
    permute(M, X);
    permute(N, Y);
    permute(O, Z);
    //debug(M);
    //debug(N);

    let n = 5; // number of row = column
	let s = (width - 2*pad) / n; // length of the tile
	let mult = 0.5; // ratio of the design with the tile

    translate(pad, pad);

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
            dots(j*s+s/2, i*s+s/2, s, O[i][j]);
            pattern(j*s+s/2, i*s+s/2, s, N[i][j]);
			if (random() < 0.5) {
				circles(j*s+s/2, i*s+s/2, s*mult, M[i][j]);
			}
			else {
				squares(j*s+s/2, i*s+s/2, s*mult, M[i][j]);
			}
		}
    }
    
    // Frame
    noFill();
    stroke(0);
    strokeWeight(40);
    rect(300-pad, 300-pad, 600, 600);

    // Code
    noStroke();
    fill('#000000');
    str = X.map(j => j.join('')).join('');
    str += "-";
    str += Y.map(j => j.join('')).join('');
    str += "-";
    str += Z.map(j => j.join('')).join('');
    text("Code: "+str, 0, height-95);
}

function dots(x, y, size, k) {
    push();
    translate(x, y);
    let points = 8 + 2*k;
    strokeWeight(2);
    for (let i = 1; i < points; i++) {
        for (let j = 1; j < points; j++) {
            point(-size/2+j*size/points, -size/2+i*size/points);
        }
    }
    pop();
}

function pattern(x, y, size, k) {
    push();
    translate(x, y);
    noFill();
    strokeWeight(1);
    square(0, 0, size);
    switch (k) {
        case 0:
            arc(-size/2, 0, size, size, -PI/2, PI/2); //left
            arc(size/2, 0, size, size, PI/2, 3*PI/2); //right
            arc(0, -size/2, size, size, 0, PI); //up
            arc(0, size/2, size, size, PI, 2*PI); //bottom
            break;
        case 1:
            for (let i = 1; i < 8; i++) {
                line(-size/2+i*size/8, -size/2, -size/2+i*size/8, size/2);
            }
            break;
        case 2:
            triangle(-size/2, -size/2, -size/2, size/2, size/4, 0);
            triangle(size/2, -size/2, size/2, size/2, -size/4, 0);
            break;
        case 3:
            line(-size/2, -size/4, size/2, -size/4);
            line(-size/2, size/4, size/2, size/4);
            line(-size/4, -size/2, -size/4, size/2);
            line(size/4, -size/2, size/4, size/2);
            break;
        case 4:
            arc(-size/2, -size/2, size, size, 0, PI/2);
            arc(-size/2, size/2, size, size, -PI/2, 0);
            arc(size/2, size/2, size, size, PI, 3*PI/2);
            arc(size/2, -size/2, size, size, PI/2, PI);
            break;
    }
    pop();
}

function createRule() {
    let t = int(random(3, 7)); // Number of alternating permutation
    X = [];
    Y = [];
    Z = [];
    for (let i = 0; i < t; i++) {
        X.push([]);
        Y.push([]);
        Z.push([]);
        X[i][0] = int(random(5));
        Y[i][0] = int(random(5));
        Z[i][0] = int(random(5));
        do {
            X[i][1] = int(random(5));
        } while (X[i][1] == X[i][0]);
        do {
            Y[i][1] = int(random(5));
        } while (Y[i][1] == Y[i][0]);
        do {
            Z[i][1] = int(random(5));
        } while (Z[i][1] == Z[i][0]);
    }
}

function permute(M, X) {
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
