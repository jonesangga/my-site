// jonesangga, 2023
// github.com/jonesangga

let title = "Self-Similar-Figures-3";

let palette = ['#00A5E3', '#8DD7BF', '#FF96C5', '#FF5768', '#FFBF65'];

let M = [];
for (let i = 0; i < 5; i++) {
    M.push([]);
    for (let j = 0; j < 5; j++) {
        M[i][j] = (i+j) % 5;
    }
}

let pad = 20;
let n = 5;
let mult = 0.8;

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    rectMode(CENTER)
    noLoop();
}

function draw() {
    background('#fffbe6');
    let b = width - 2*pad;
    let h = b;

    push();
    translate(pad, pad);
    triangles(0, 0, b, h);
    translate(b, h);
    rotate(-PI);
    triangles(0, 0, b, h);
    pop();
}

function triangles(x, y, b, h) {
    if (b < 40) return;
    strokeWeight(2);
    fill(random(palette));
    triangle(x, y, x, y+h, x+b, y+h);
    let s = b / (2*(n+1));
    if (b > 80) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (random() < 0.5) {
                    circles(x+(j+1)*s, y+h/2+(i+1)*s, s*mult, M[i][j]);
                }
                else {
                    squares(x+(j+1)*s, y+h/2+(i+1)*s, s*mult, M[i][j]);
                }
            }
        }
    }
    else {
        for (let i = 0; i < 10; i++) {
            line(x+(i+1)*b/10, y, x+(i+1)*b/10, y+h);
        }
    }
    triangles(x, y, b/2, h/2);
    triangles(x+b/2, y+h/2, b/2, h/2);
}

// The following two functions are from 1-study-grid.js

// Draw a circle design with center (x, y) and diameter d
// Draw a smaller circle inside
function circles(x, y, d, id) {
	push();
	translate(x, y);

	let color1 = palette[id];
	fill(color1);
	strokeWeight(1);
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
	strokeWeight(1);
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
