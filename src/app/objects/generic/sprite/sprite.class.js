import { canvasContext } from "../../../interface/gameVariables.js";

export class Sprite {
  constructor({
    speed,
    position,
    velocity,
    width,
    height,
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = {
      x: 0,
      y: 0,
    },
  }) {
    this.speed = speed;
    this.position = position;
    this.velocity = velocity;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = imageSrc;
    this.scale = scale;
    this.framesMax = framesMax;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 10;
    this.offset = offset;
  }
  draw() {
    c.drawImage(
      this.image,
      this.framesCurrent * (this.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale
    );
  }
  animateFrames() {
    this.framesElapsed++;

    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++;
      } else {
        this.framesCurrent = 0;
      }
    }
  }
  update() {
    this.draw();
    this.animateFrames();

    (this.position.y += this.velocity.y), (this.position.x += this.velocity.x);

    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity;
  }

  isShooting() {
    spawnBomb();
  }

  isBlocked() {
    this.isCanMove = false;
    this.speed = 0;
  }

  drawDebugCollisionSquare() {
    canvasContext.beginPath();
    canvasContext.strokeStyle = "red";
    canvasContext.lineWidth = 1;

    canvasContext.rect(
      this.position.x,
      this.position.y,
      this.width * this.scale,
      this.height * this.scale
    );

    canvasContext.stroke();
    canvasContext.closePath();
  }
}
