// jonesangga, 2023
// github.com/jonesangga

let title = "Minimal-Dark";

let pad = 80;

function setup() {
	let canvas = createCanvas(600, 600);
	canvas.parent('sketch-container');
	pixelDensity(density);
	noLoop();
}

function draw() {
	background('#212121');
	noStroke();
	translate(pad, pad);
	
	let s = width - 2*pad; // side of initial square
	let m = 0.9; // ratio of next side and current side

	while (s > 10) {
		fill(map(s, 10, width-2*m, 0, 1000));
		square(0, 0, s);
		let coor = [[0, 0], [s-s*m, 0], [0, s-s*m], [s-s*m, s-s*m]];
		let q = random(coor);
		translate(q[0], q[1]);
		s *= m;
	}
}
