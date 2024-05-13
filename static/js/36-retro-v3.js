// jonesangga, 2023
// github.com/jonesangga

let title = "Retro-v3";

let palette = ['#F0D8A8', '#3D1C00', '#86B8B1', '#F2D694', '#FA2A00'];

let pad = 50;
let sw = 5;
let space = 10;
let n = 5;
let p = palette.length;
let c;

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    strokeCap(PROJECT);
    noLoop();
}

function draw() {
    background(0);
    strokeWeight(1);
    c = int(random(p));
    size = ((600 - 2*pad) - (n-1) * space) / n;
    let k = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            strip(pad+j*(size+space), pad+i*(size+space), k);
            k++;
        }
    }
}

function strip(x, y, k) {
    strokeWeight(sw);
    for (let i = 0; i <= size/sw; i++) {
        if (i % 2 == 0) {
            stroke(palette[(c+k) % p]);
        }
        else {
            stroke(palette[(c+k+1) % p]);
        }
        line(x, y+i*sw, x+size, y+i*sw);
    }   
}
