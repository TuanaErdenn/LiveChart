let butterflies = [];

function setup() {
  createCanvas(1000, 600);
  for (let i = 0; i < 150; i++) {
    butterflies.push(new Butterfly());
  }
  noStroke();
}

function draw() {
  background(240, 245, 255);

  for (let b of butterflies) {
    b.update();
    b.display();
  }
}

class Butterfly {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.r = random(4, 8);
        this.color = color(random(100, 255), random(100, 255), random(100, 255));
        this.vx = random(-2, 2);
        this.vy = random(-2, 2);
      }
      

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;

    if (mouseX > width / 2) {
      this.x += this.vx * 2;
      this.y += this.vy * 2;
    } else {
      this.color = color(random(255), random(255), random(255));
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    scale(this.r / 20);
    rotate(atan2(this.vy, this.vx)); 

    fill(this.color);
    ellipse(-10, -10, 20, 30);
    ellipse(10, -10, 20, 30);  
    ellipse(-10, 10, 15, 25); 
    ellipse(10, 10, 15, 25);  

    fill(80);
    rect(-3, -15, 6, 30, 5);

    fill(255);
    ellipse(0, -18, 6);

    pop();
  }
}
