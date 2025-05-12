import { canvasContext, gameVariables } from "./interface/gameVariables.js";
import { player } from "./objects/player/player.class.js";

const animate = () => {
  requestAnimationFrame(animate);
  canvasContext.clearRect(
    0,
    0,
    gameVariables.canvas.width,
    gameVariables.canvas.height
  );

  canvasContext.fillStyle = "white";
  canvasContext.fillRect(
    0,
    0,
    gameVariables.canvas.width,
    gameVariables.canvas.height
  );

  player.update();
};
animate();
