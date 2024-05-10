// jonesangga, 2023
// github.com/jonesangga

let title = "Multiplication_Table";

let palette_ = [
    ['#29221F', '#7DFFFF'],
    ['#F0D8A8', '#86B8B1'],
];

let palette;

let U = [
    [[1,0], [0,1]],
    [[1,0], [1,1]],
    [[1,1], [0,1]],
    [[1,1], [1,0]],
    [[0,1], [1,1]],
    [[0,1], [1,0]],
];

let pad = 60;
let m = 2;
let n = 2;
let p = 2;
let t = 7;

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    noLoop();
}

function draw() {
    palette = random(palette_);
    background(palette[0]);
    U = shuffle(U);
    let gridSize = (width - 2*pad) / t;

    strokeWeight(1);
    stroke(255);
    line(pad+gridSize, 0, pad+gridSize, height);
    line(0, pad+gridSize, width, pad+gridSize);

    for (let i = 1; i < t; i++) {
        push();
        translate(pad+i*gridSize, pad);
        scale(gridSize / width);
        showCircle(U[i-1]);
        pop();
    }

    for (let i = 1; i < t; i++) {
        push();
        translate(pad, pad+i*gridSize);
        scale(gridSize / width);
        showCircle(U[i-1]);
        pop();
    }

    for (let i = 1; i < t; i++) {
        for (let j = 1; j < t; j++) {
            push();
            translate(pad+j*gridSize, pad+i*gridSize);
            scale(gridSize / width);
            showCircle(multiplyModn(U[i-1], U[j-1], p));
            pop();
        }
    }
}

function showCircle(M) {
    stroke(0);
    strokeWeight(10);
    push();
    translate(width/2, height/2);
    rotate(PI);
    let d = 500;
    let t = TWO_PI / n;
    let r = d / n;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            fill(palette[M[i][j]]);
            arc(0, 0, d-i*r, d-i*r, j*t, TWO_PI);
        }
    }
    pop();
}

// This is only for square matrices
function multiplyModn(A, B, p) {
    let C = [];
    for (let i = 0; i < n; i++) {
        C.push([]);
        for (let j = 0; j < n; j++) {
            C[i][j] = 0;
            for (let k = 0; k < n; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
            C[i][j] = C[i][j] % p;
        }
    }
    return C
}
