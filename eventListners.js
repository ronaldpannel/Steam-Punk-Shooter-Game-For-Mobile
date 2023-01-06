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
upBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  keys.touchUp.pressed = true
});
downBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
keys.touchDown.pressed = true;
  
});
upBtn.addEventListener("touchend", (e) => {
  e.preventDefault();
  keys.touchUp.pressed = false
});
downBtn.addEventListener("touchend", (e) => {
  e.preventDefault();
  keys.touchDown.pressed = false;
});
shootBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
   console.log("shoot");
  keys.touchShoot.pressed = true
   if (keys.touchShoot.pressed) {
     if (gameState) {
       laserSound.play();
       laserSound.volume = 0.05;
     }
     lasersArray.push(
       new Laser({
         pos: {
           x: player.pos.x + player.width - 10,
           y: player.pos.y + player.height / 2 - 10,
         },
         vel: {
           x: 0,
           y: 0,
         },
         width: 30,
         height: 30,
         color: "rgba(0, 255, 0, 0.5)",
         imageSrc: "ballLightning.png",
       })
     );
   }
});

shootBtn.addEventListener("touchend", (e) => {
  e.preventDefault();
  console.log('shoot end')
  // keys.touchShoot.pressed = false
});
