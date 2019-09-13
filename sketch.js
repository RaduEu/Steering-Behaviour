function setup() {
  createCanvas(2000, 2000);
  ag = [];
  for(i=0;i<10;i++){
    ag[i] = new agent(random(width),random(height));
  }
}

function draw() {
  background(220);
  let target = createVector(mouseX, mouseY);
  for(i=0;i<10;i++){
    ag[i].setTarget(target);
    ag[i].update();
    ag[i].show();
  }
}