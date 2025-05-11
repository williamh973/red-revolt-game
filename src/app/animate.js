import { canvasParams } from "./canvas";

const animate = () => {
  requestAnimationFrame(animate);
  console.log("okayyy");
  canvasParams.c.fillstyle = "white";
  canvasParams.c.fillRect(
    0,
    0,
    canvasParams.canvas.with,
    canvasParams.canvas.height
  );
};
