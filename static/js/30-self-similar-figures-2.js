// jonesangga, 2023
// github.com/jonesangga

let title = "Self-Similar-Figures-2";

let palette = ['#00A5E3', '#8DD7BF', '#FF96C5', '#FF5768', '#FFBF65'];

let pad = 20;

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    noLoop();
}

function draw() {
    background(0);
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
    if (b < 10) return;
    if (b < 500) strokeWeight(0.05*b);
    fill(random(palette));
    triangle(x, y, x, y+h, x+b, y+h);
    for (let i = 0; i < 10; i++) {
        line(x+(i+1)*b/10, y, x+(i+1)*b/10, y+h);
    }
    triangles(x, y, b/2, h/2);
    triangles(x+b/2, y+h/2, b/2, h/2);
}
