// jonesangga, 2023
// github.com/jonesangga

let title = "Op10";

let palette = ['#F0D8A8', '#3D1C00', '#86B8B1', '#F2D694', '#FA2A00'];

let pad = 0;
let c1, c2;
let n;
let p = [];

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');
    pixelDensity(density);
    colorMode(HSB);
    strokeCap(PROJECT);
    noLoop();
}

function draw() {
    c1 = random(palette);
    do {
        c2 = random(palette);
    } while (c1 == c2);

    background(c1);
    noStroke();
    translate(300, 300);

    n = 2 * int(random(3, 6)); // must be even
    p = Array(4*n).fill([]);
    getPoint();

    let r = (600 - 2*pad) / 2;
    let v = 3;
    let q = 0;
    let sign = 1;
    let mult = 0.9;

    while (r > 20) {
        for (let i = 0; i < 4*n; i++) {
            if (sign == 1) {
                if (i % 2 == 0) {
                    fill(hue(c1), saturation(c1), brightness(c1)-q*v);
                }
                else {
                    fill(hue(c2), saturation(c2), brightness(c2)-q*v);
                }
            }
            else {
                if (i % 2 == 0) {
                    fill(hue(c2), saturation(c2), brightness(c2)-q*v);
                }
                else {
                    fill(hue(c1), saturation(c1), brightness(c1)-q*v);
                }
            }
            triangle(
                0, 0,
                p[i][0]*r, p[i][1]*r,
                p[(i+1) % p.length][0]*r, p[(i+1) % p.length][1]*r
            );
        }

        if (brightness(c1)-q*v < 80) {
            q += 2;
        }
        else {
            q += 3;
        }

        r *= mult;
        sign *= -1;
    }

    stroke('#ff0000');
    let stk = 40;
    r = (600 - 2*pad) / 2;
    let j = 0;
    
    while (r > 20) {
        strokeWeight(stk);
        for (let i = 0; i < 4*n; i++) {
            do {
                j = int(random(4*n));
            } while (p[j % p.length][0] == p[i][0] || p[j % p.length][1] == p[i][1]);

            if (random() < 0.01) {
                line(p[i][0]*r, p[i][1]*r, p[j][0]*r, p[j][1]*r);
            }
        }

        r *= mult;
        stk *= 0.85;
    }
}

function getPoint() {
    let t = n / 2;
    for (let i = 0; i < t; i++) {
        p[i] = [1, i/t];
        p[i+n/2] = [1-i/t, 1];

        p[i+n] = [-i/t, 1];
        p[i+n+n/2] = [-1, 1-i/t];

        p[i+2*n] = [-1, -i/t];
        p[i+2*n+n/2] = [-1+i/t, -1.];

        p[i+3*n] = [i/t, -1];
        p[i+3*n+n/2] = [1, -1+i/t];
    }
}
