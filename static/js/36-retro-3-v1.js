// jonesangga, 2023
// github.com/jonesangga

let title = "Retro-3-v1";

let palette = ['#00A5E3', '#8DD7BF', '#FF96C5', '#FF5768', '#FFBF65'];

let pad = 50;
let sw;
let space = 0;
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
    sw = size / 32;
    let k = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            strip(pad+j*(size+space), pad+i*(size+space), size, k);
            strip(pad+size/2+j*(size+space), pad+size/2+i*(size+space), size/2, k+3);
            k++;
        }
    }
}

function strip(x, y, size, k) {
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
