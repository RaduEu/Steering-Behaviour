class agent {
  constructor(x, y) {
    this.vel = createVector();
    this.acc = createVector();
    this.pos = createVector(x, y);
    this.maxSpeed = 5;
    this.maxForce = 0.2; // The higher the value, the sharper the turns
    this.size = 10;
    this.maxDistance = 300;
    this.target = null;
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxVel);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.seek();
  }

  show() {
    let angle = PI / 2 + this.vel.heading();
    let green = color(0, 255, 0);
    let red = color(255, 0, 0);
    let col = lerpColor(green, red, p5.Vector.sub(this.target, this.pos).mag() / this.maxDistance);
    stroke(col);
    fill(col);
    push()
    translate(this.pos.x, this.pos.y);
    rotate(angle);
    beginShape();
    vertex(0, -2 * this.size);
    vertex(-this.size, this.size * 2);
    vertex(this.size, this.size * 2);
    endShape(CLOSE);
    pop();
  }

  seek() {
    let desired = p5.Vector.sub(this.target, this.pos); // desired velocity
    desired.limit(this.maxSpeed);
    let change = p5.Vector.sub(desired, this.vel); // desired acceleration
    change.setMag(this.maxForce);
    this.acc.add(change);
  }

  setTarget(target) {
    this.target = target;
  }
}