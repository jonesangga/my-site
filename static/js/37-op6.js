// jonesangga, 2023
// github.com/jonesangga

let title = "Op6";

let palette = ['#F0D8A8', '#3D1C00', '#86B8B1', '#F2D694', '#FA2A00'];

let pad = 50;

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    noLoop();
}

function draw() {
    background(0);
    noStroke();
    palette = shuffle(palette);

    let size = 600 - 2*pad;
    let k = 40;
    let l = size / k;

    for (let i = k; i >= 1; i--) {
        rect(pad, (pad+i*l/2), 300-pad, -l/2);
        rect(600-pad, (pad+i*l/2), -300+pad, -l/2);

        fill(palette[i % 3]);
        arc(300, 300, i*l, i*l, PI, 2*PI);

        rect(pad, 600-(pad+i*l/2), 300-pad, l/2);
        rect(600-pad, 600-(pad+i*l/2), -300+pad, l/2);

        fill(palette[i % 3]);
        arc(300, 300, i*l, i*l, 0, PI);
    }
}
