
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
    let b = centers[(i + 1) % 3];

    for (let j = 0; j < 8; j++) {
      let x = lerp(a[0], b[0], growth);
      let y = lerp(a[1], b[1], growth);

      let bend = sin(frameCount * 0.02 + j) * 40 * growth;

      stroke(150, 220, 180, 120);
      strokeWeight(1.5);

      bezier(
        a[0], a[1],
        lerp(a[0], x, 0.3) + bend,
        lerp(a[1], y, 0.3) - bend,
        lerp(a[0], x, 0.7) - bend,
        lerp(a[1], y, 0.7) + bend,
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
