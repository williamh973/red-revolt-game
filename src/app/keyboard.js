import { Parker } from "./objects/player/player.class.js";

export let player = new Parker();
export let isRightDirection = false;
export let isLeftDirection = false;

export let keys = {
  ArrowLeft: { pressed: false },
  ArrowRight: { pressed: false },
  ArrowUp: { pressed: false },
  q: { pressed: false },
  d: { pressed: false },
  z: { pressed: false },
  space: { pressed: false },
};

let counterKeydown = 0;

window.addEventListener("keydown", (event) => {
  if (player.isCanMove) {
    switch (event.key) {
      case "q":
        playerMovingOnLeft();
        break;
      case "d":
        playerMovingOnRight();
        break;
      case "z":
        playerJumping();
        break;
      case " ":
        playerShooting();
    }
  }
});

window.addEventListener("keyup", (event) => {
  if (player.isCanMove) {
    switch (event.key) {
      case "q":
        playerStoppedMovingLeft();
        break;
      case "d":
        playerStoppedMovingRight();
        break;
      case "z":
        keys.z.pressed = false;
        break;
      case " ":
        keys.space.pressed = false;
        break;
    }
  }
});

function playerMovingOnLeft() {
  keys.q.pressed = true;
  isLeftDirection = true;
  isRightDirection = false;
  player.currentSprite = player.sprites.run.left;
  player.currentCropWidth = player.sprites.run.cropWidth;
  player.width = player.sprites.run.width;
}

function playerMovingOnRight() {
  keys.d.pressed = true;
  isLeftDirection = false;
  isRightDirection = true;
  player.currentSprite = player.sprites.run.right;
  player.currentCropWidth = player.sprites.run.cropWidth;
  player.width = player.sprites.run.width;
}

function playerStoppedMovingRight() {
  keys.d.pressed = false;
  player.currentSprite = player.sprites.stand.right;
  player.currentCropWidth = player.sprites.stand.cropWidth;
  player.width = player.sprites.stand.width;
}

function playerStoppedMovingLeft() {
  keys.q.pressed = false;
  player.currentSprite = player.sprites.stand.left;
  player.currentCropWidth = player.sprites.stand.cropWidth;
  player.width = player.sprites.stand.width;
}

function playerJumping() {
  keys.z.pressed = true;

  if (event.repeat) {
    return;
  }

  counterKeydown++;

  if (counterKeydown === 1) {
    keys.z.pressed = true;
    player.velocity.y -= 12;
    setTimeout(() => {
      counterKeydown = 0;
    }, 600);
  }
}

function playerShooting() {
  keys.space.pressed = true;
  player.shoot();
}
