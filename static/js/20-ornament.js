// jonesangga, 2023
// github.com/jonesangga

let title = "Ornament";

let palette_ = [
    ['#00A5E3', '#8DD7BF', '#FF96C5', '#FF5768', '#FFBF65'],
    ['#D1313D', '#E5625C', '#F9BF76', '#8EB2C5', '#615375'],
    ['#FC354C', '#29221F', '#13747D', '#0ABFBC', '#FCF7C5'],
    ['#F0D8A8', '#3D1C00', '#86B8B1', '#F2D694', '#FA2A00'],
];

let palette;

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    rectMode(CENTER);
    noLoop();
}

function draw() {
    background(255);
    palette = random(palette_);
    noStroke();
    let s = 40;
    for (let i = 20; i < width; i += s) {
        for (let j = 20; j < height; j += s) {
            fill(random(palette));
            square(i, j, s);
        }
    }
    
    noFill();
    stroke(0, 200);
    let k = 6;
    recc(width*0.25, height*0.25, width/k);
    recc(width*0.75, height*0.25, width/k);
    recc(width*0.75, height*0.75, width/k);
    recc(width*0.25, height*0.75, width/k);
    recc(width/2, height/2, 600);
}

function recc(x, y, s) {
    if (s < 20) return;
    strokeWeight(0.1*s);
    square(x, y, s);
    recc(x, y-s/2, s/2);
    recc(x, y+s/2, s/2);
    recc(x+s/2, y, s/2);
    recc(x-s/2, y, s/2);
}
