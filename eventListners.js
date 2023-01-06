window.addEventListener("keydown", (e) => {
  //console.log(e.key);
  if (e.key === "ArrowUp") {
    player.lastKey = "ArrowUp";
    keys.arrowUp.pressed = true;
  }
  if (e.key === "ArrowDown") {
    player.lastKey === "ArrowDown";
    keys.arrowDown.pressed = true;
  }
  if (e.key === "s") {
    lasersArray.lastKey === "s";
    keys.s.pressed = true;

    handleLasers();
  }
});
window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowUp") {
    keys.arrowUp.pressed = false;
  }
  if (e.key === "ArrowDown") {
    keys.arrowDown.pressed = false;
  }
  if (e.key === "s") {
    keys.s.pressed = false;
  }
});

// touch control
upBtn.addEventListener("touchstart", function (e) {
  e.preventDefault();
  keys.touchUp.pressed = true
});
downBtn.addEventListener("touchstart", function (e) {
  e.preventDefault();
keys.touchDown.pressed = true;
  
});
upBtn.addEventListener("touchend", function (e) {
  e.preventDefault();
  keys.touchUp.pressed = false
});
downBtn.addEventListener("touchend", function (e) {
  e.preventDefault();
  keys.touchDown.pressed = false;
});
shootBtn.addEventListener("touchstart", function (e) {
  e.preventDefault();
  keys.touchShoot.pressed = true;
});

// fireBtn.addEventListener("touchend", function (e) {
//   e.preventDefault();
//   keys.touchShoot.pressed = false
// });
