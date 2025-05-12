import { canvasParams } from "../../../canvas.js";

export class Platform {
  constructor({ x, y, image, scale }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    this.scale = scale;
  }

  draw() {
    canvasParams.c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.image.width * this.scale,
      this.image.height * this.scale
    );
  }

  overlapsWith(otherPlatform) {
    return (
      this.position.x < otherPlatform.position.x + otherPlatform.width &&
      this.position.x + this.width > otherPlatform.position.x &&
      this.position.y < otherPlatform.position.y + otherPlatform.height &&
      this.position.y + this.height > otherPlatform.position.y
    );
  }

  placePlatform500x175AwayFromPlatform500x175(referencePlatform) {
    let randomFactorX = Math.random();
    let randomNumberX = Math.floor(randomFactorX * 100) + 100;

    let randomFactorY = Math.random();
    let randomNumberY = Math.floor(randomFactorY * 76) + 100;

    this.position.x = referencePlatform.position.x + randomNumberX;
    this.position.y = referencePlatform.position.y + randomNumberY;
  }
}
