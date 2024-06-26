// jonesangga, 2023
// github.com/jonesangga

let title = "Textile-2";

let palette = ['#FFEDBF', '#F7803C', '#F54828', '#2E0D23', '#F8E4C1'];

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    noLoop();
}

function draw() {
    background(random(palette));
    stroke(0);
    strokeWeight(2);
  
    let k = 100;
    for (let i = 0; i < k; i++) {
        fill(random(palette));
        if (random() < 0.5) {
            rect(i*width/k, 0, width/k, height);
        }
        else {
            rect(0, i*width/k, height, width/k);
        }
    }
    for (let i = 0; i < k; i++) {
        fill(random(0, 50));
        if (random() < 0.5) {
            rect(i*width/k, 0, width/k, height);
        }
        else {
            rect(0, i*width/k, height, width/k);
        }
    }
    for (let i = 0; i < k; i++) {
        fill(random(palette));
        if (random() < 0.5) {
            rect(i*width/k, 0, width/k, height);
        }
        else {
            rect(0, i*width/k, height, width/k);
        }
    }

    // Frame
    strokeWeight(60);
    noFill();
    rect(0, 0, width, height);
    stroke(255);
    strokeWeight(40);
    rect(0, 0, width, height);
}
