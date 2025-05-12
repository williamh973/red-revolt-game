// import { gameVariables } from "../../interface/gameVariables.js";
import { canvasContext, gameVariables } from "../../interface/gameVariables.js";

export class Parker {
  constructor() {
    this.position = {
      x: 0,
      y: 0,
    };
    this.velocity = {
      x: 0,
      y: 1,
    };
    (this.width = 25), (this.height = 25);
    this.color = "red";
  }
  draw() {
    canvasContext.fillStyle = this.color;
    canvasContext.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update() {
    this.position.y += this.velocity.y / 3;
    this.position.x += this.velocity.x;

    if (
      this.position.y + this.height + this.velocity.y <=
      gameVariables.canvas.height
    )
      this.velocity.y += gameVariables.gravity;

    this.draw();
  }
}

export const player = new Parker();
