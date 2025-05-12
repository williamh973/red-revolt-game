import { player } from "../../../keyboard.js";
import { allPlatformList } from "./platforms-list.js";

export function platformCollide() {
  for (let i = 0; i < allPlatformList.length; i++) {
    let platform = allPlatformList[i];

    for (let j = 0; j < platform.length; j++) {
      let currentPlatform = platform[j];
      if (playerOnPlatform(player, currentPlatform)) {
        player.velocity.y = 0;
      }
    }
  }
}

function playerOnPlatform(player, currentPlatform) {
  return (
    player.position.y + player.height <= currentPlatform.position.y &&
    player.position.y + player.height + player.velocity.y >=
      currentPlatform.position.y &&
    player.position.x + player.width >= currentPlatform.position.x + 23 &&
    player.position.x + player.width <=
      currentPlatform.position.x + currentPlatform.width + 35
  );
}
