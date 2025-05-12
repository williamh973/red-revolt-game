import { Platform } from "./platforms.class.js";
import { platformMiddle500x175 } from "./platform-assets.js";
import { platformMiddle500x175List } from "./platform-adjustment.js";

export function dispachPlatformsMiddle500x175() {
  return new Promise((resolve) => {
    for (let i = 0; i < 5; i++) {
      let randomFactor = Math.random();
      let randomNumberBetweenX = Math.floor(randomFactor * 100) + 100 + i * 600;

      platformMiddle500x175List.push(
        new Platform({
          x: randomNumberBetweenX,
          y: 505,
          image: platformMiddle500x175,
          scale: 1,
        })
      );
    }
    resolve();
  });
}
