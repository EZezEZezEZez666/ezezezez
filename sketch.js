
let growth = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(20);
  noFill();

  let centers = [
    [100, 200],
    [200, 100],
    [300, 250]
  ];

 
  for (let i = 0; i < 3; i++) {
    let a = centers[i];

    for (let j = 0; j < 24; j++) {
      let b = centers[(i + 1 + j % 2) % 3];

      let x = lerp(a[0], b[0], growth);
      let y = lerp(a[1], b[1], growth);


      let bend = (j - 12) * 7
               + sin(frameCount * 0.02 + j) * 15;

      stroke(150, 220, 180, 80);
      strokeWeight(1);

      bezier(
        a[0], a[1],
        a[0] + bend, a[1] - 70,
        x - bend, y + 70,
        x, y
      );
    }
  }

  fill(150, 220, 180);
  noStroke();

  for (let c of centers) {
    circle(c[0], c[1], 8);
  }


  if (growth < 1) {
    growth += 0.003;
    growth = min(growth, 1);
  }
}
