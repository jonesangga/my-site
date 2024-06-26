// jonesangga, 2023
// github.com/jonesangga

let title = "Tree-3";

let palette = ['#1C0113', '#6B0103', '#A30006', '#C21A01', '#F03C02'];

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    noLoop();
}

function draw() {
    background('#1C0113');
    noStroke();
    fill(255);
    for (let i = 0; i < 150; i++) {
        let size = random(1, 2);
        circle(random(width), random(400), size);
        square(random(width), random(400), size);
    }

    for (let i = 0; i < 30; i++) {
        fill(255 - i*6);
        circle(300, 300, 400 - i*13);
    }

    let left = 0.3;
    let right = 1 - left;

    let trees = [];
    let treeCount = int(random(40, 80));

    for (let i = 0; i < treeCount; i++) {
        trees.push( new Tree(
            int(random(width * left, width * right)),
            int(random(400, height)),
            int(random(20, 150)),
            radians(random(5, 15))
        ) );
    }

    let smallTrees = [];

    for (let i = 0; i < treeCount/2; i++) {
        smallTrees.push( new Tree(
            int(random(0, width * left)),
            int(random(550, height)),
            int(random(10, 20)),
            radians(random(5, 15))
        ) );
    }

    for (let i = -1; i < treeCount/2; i++) {
        smallTrees.push( new Tree(
            int(random(width * right, width)),
            int(random(550, height)),
            int(random(10, 20)),
            radians(random(5, 15))
        ) );
    }

    for (let i = 0; i < treeCount; i++) {
        trees[i].draw();
        smallTrees[i].draw()
    }
}

class Tree {
    constructor(rootX, rootY, h, theta) {
        this.rootX = rootX;
        this.rootY = rootY;
        this.h = h;
        this.theta = theta;
    }

    draw() {
        push();
        translate(this.rootX, this.rootY);
        this.branch(this.h);
        pop();
    }
    
    branch(t) {
        stroke(random(palette));
        let sw = map(t, 2, 100, 1, 5);
        strokeWeight(sw);
        line(0, 0, 0, -t);
        translate(0, -t);
        t *= 0.7;

        if (t > 8) {
            push();
            rotate(this.theta);
            this.branch(t);
            pop();
            
            push();
            rotate(-this.theta);
            this.branch(t);
            pop();
        }
    }
}
