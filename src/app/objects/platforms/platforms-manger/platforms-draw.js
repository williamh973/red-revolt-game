import { allPlatformList } from "./platforms-list.js";

export function drawPlatforms() {
  for (let i = 0; i < allPlatformList.length; i++) {
    const platformList = allPlatformList[i];

    for (let j = 0; j < platformList.length; j++) {
      const platform = platformList[j];

      platform.draw();
    }
  }
}
