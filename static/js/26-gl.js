// jonesangga, 2023
// github.com/jonesangga

let title = "GL";

let palette = ['#F0D8A8', '#3D1C00', '#86B8B1', '#F2D694', '#FA2A00'];

let pad = 20;
let m, n;
let A, B, C;

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    textFont("Courier New", 15);
    noLoop();
}

function draw() {
    background(palette[3]);
    fill(palette[2]);
    stroke(0);
    strokeWeight(10);
    n = int(random(3, 6));
    m = n;
    let p = 5;
    let w = width - 2*pad;
    let h = 2 * w / 3;
    let gridSize = w / 3;
    let entrySize = gridSize / (n+1);

    rect(pad, (height-h)/2, w, h);
    line(pad, 300, width-pad, 300);
    line(pad+2*gridSize, (height-h)/2, pad+2*gridSize, (height+h)/2);

    A = makeMatrix(m, n, p);
    B = makeMatrix(m, n, p);
    C = multiplyModn(A, B, p);

    push()
    translate(pad+0*gridSize, height/2);
    scale(gridSize / width);
    showCircle(A);
    pop();

    push();
    translate(pad+0*gridSize, (height-h)/2);
    showMatrix(A, entrySize);
    pop();

    push();
    translate(pad+1*gridSize, height/2);
    scale(gridSize / width);
    showCircle(B);
    pop();

    push();
    translate(pad+1*gridSize, (height-h)/2);
    showMatrix(B, entrySize);
    pop();

    push();
    translate(pad+2*gridSize, height/2);
    scale(gridSize / width);
    showCircle(C);
    pop();

    push();
    translate(pad+2*gridSize, (height-h)/2);
    showMatrix(C, entrySize);
    pop();
}

function showMatrix(M, entrySize) {
    noStroke();
    fill('#ffffff')
    let str = '';
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            str = M[i][j] + '';
            text(str, (j+1)*entrySize, (i+1)*entrySize);
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

function makeMatrix(m, n, max) {
    let M = [];
    for (let i = 0; i < m; i++) {
        M.push([]);
        for (let j = 0; j < n; j++) {
            M[i][j] = int(random(max));
        }
    }
    return M;
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
