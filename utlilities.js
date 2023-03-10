function playerEnemyCollision() {
  for (let i = 0; i < enemiesArray.length; i++) {
    if (
      (enemiesArray[i].pos.x <= player.pos.x + player.width &&
        enemiesArray[i].pos.x >= player.pos.x + player.width - 5 &&
        enemiesArray[i].pos.y + enemiesArray[i].height >= player.pos.y &&
        enemiesArray[i].pos.y <= player.pos.y + player.height) ||
      timerValue === 0
    ) {
      enemiesArray.splice(i, 1);
      health--;
      playerHealth.innerHTML = health;
      if (health < 1 && timerValue >= 1) {
        playerExpSound.play();
      }

      handlePlayerExpParticle();

      if (health === 0) {
        ctx.font = "50px Bangers";
        ctx.fillStyle = "white";
        ctx.fillText("Game Over  ", canvas.width / 2 - 30, canvas.height / 2);
        ctx.fillText(
          "Move Player Touch Up & Down Buttons and Fire to shoot Fire Bombs",
          canvas.width / 2 - 400,
          canvas.height / 2 + 60
        );
        gameStartBtn.classList.add("btnActive");
        resetHighScoreBtn.classList.add("btnActive");
        credits.classList.add("btnActive");
        gameState = false;
      }
    }
  }
}

function playerPowerUpCollision() {
  for (let i = 0; i < powerUpsArray.length; i++) {
    if (
      powerUpsArray[i].pos.x <= player.pos.x + player.width &&
      powerUpsArray[i].pos.x >= player.pos.x + player.width - 5 &&
      powerUpsArray[i].pos.y + powerUpsArray[i].height >= player.pos.y &&
      powerUpsArray[i].pos.y <= player.pos.y + player.height
    ) {
      luckySound.play();
      luckySound.volume = 0.1;
      powerUpsArray.splice(i, 1);

      ctx.font = "30px  Bangers";
      ctx.fillStyle = "white";
      ctx.fillText("Game Over  ", canvas.width / 2 - 100, canvas.height / 2);
      ctx.fillText(
        "Move Player Press Up & Down Arrows and S to shoot Fire Bombs",
        canvas.width / 2 - 380,
        canvas.height / 2 + 40
      );
      health = 6;
      playerHealth.innerHTML = health;
    }
  }
}
function laserEnemyCollision() {
  for (let i = enemiesArray.length - 1; i >= 0; i--) {
    for (let j = lasersArray.length - 1; j >= 0; j--) {
      if (
        enemiesArray[i].pos.x <= lasersArray[j].pos.x + lasersArray[j].width &&
        enemiesArray[i].pos.x >= lasersArray[j].pos.x &&
        enemiesArray[i].pos.y + enemiesArray[i].height >=
          lasersArray[j].pos.y &&
        enemiesArray[i].pos.y <= lasersArray[j].pos.y + lasersArray[j].height
      ) {
        for (let v = 0; v <= 5; v++) {
          particlesEnemyArray.push(
            new PlayerParticle({
              pos: {
                x: enemiesArray[i].pos.x,
                y: enemiesArray[i].pos.y,
              },
              vel: {
                x: (Math.random() + -0.5) * 10,
                y: Math.random() + -5,
              },
              imageSrc: "gears.png",
              frameX: Math.floor(Math.random() * 2),
              frameY: Math.floor(Math.random() * 2),
            })
          );
        }
        enemiesArray.splice(i, 1);
        lasersArray.splice(j, 1);

        score += 10;
        scoreboard.innerHTML = score;
        expSound.play();
        expSound.volume = 0.1;
      }
    }
  }
}
function laserPowerUpCollision() {
  for (let i = powerUpsArray.length - 1; i >= 0; i--) {
    for (let j = lasersArray.length - 1; j >= 0; j--) {
      if (
        powerUpsArray[i].pos.x <= lasersArray[j].pos.x + lasersArray[j].width &&
        powerUpsArray[i].pos.x >= lasersArray[j].pos.x &&
        powerUpsArray[i].pos.y + powerUpsArray[i].height >=
          lasersArray[j].pos.y &&
        powerUpsArray[i].pos.y <= lasersArray[j].pos.y + lasersArray[j].height
      ) {
        luckySound.play();
        luckySound.volume = 0.1;
        powerUpsArray.splice(i, 1);
        lasersArray.splice(j, 1);
        score += 100;
        scoreboard.innerHTML = score;
      }
    }
  }
}
function playerKillerFishCollision() {
  for (let i = 0; i < killerFishArray.length; i++) {
    if (
      killerFishArray[i].pos.x <= player.pos.x + player.width &&
      killerFishArray[i].pos.x >= player.pos.x + player.width - 5 &&
      killerFishArray[i].pos.y + killerFishArray[i].height >= player.pos.y &&
      killerFishArray[i].pos.y <= player.pos.y + player.height
    ) {
      playerExpSound.play();
      killerFishArray.splice(i, 1);

      ctx.font = "30px  Bangers";
      ctx.fillStyle = "white";
      ctx.fillText("Game Over  ", canvas.width / 2 - 100, canvas.height / 2);
      ctx.fillText(
        "Move Player Press Up & Down Arrows and S to shoot Fire Bombs",
        canvas.width / 2 - 380,
        canvas.height / 2 + 40
      );
      gameStartBtn.classList.add("btnActive");
      resetHighScoreBtn.classList.add("btnActive");
      credits.classList.add("btnActive");
      gameState = false;
    }
  }
}
function laserKillerFishCollision() {
  for (let i = killerFishArray.length - 1; i >= 0; i--) {
    for (let j = lasersArray.length - 1; j >= 0; j--) {
      if (
        killerFishArray[i].pos.x <=
          lasersArray[j].pos.x + lasersArray[j].width &&
        killerFishArray[i].pos.x >= lasersArray[j].pos.x &&
        killerFishArray[i].pos.y + killerFishArray[i].height >=
          lasersArray[j].pos.y &&
        killerFishArray[i].pos.y <= lasersArray[j].pos.y + lasersArray[j].height
      ) {
        expSound.play();
        expSound.volume = 0.1;
        killerFishArray.splice(i, 1);
        lasersArray.splice(j, 1);
        score -= 50;
        scoreboard.innerHTML = score;
      }
    }
  }
}

//game Timer
let timerValue = 60;
function decreaseTimer() {
  if (timerValue > 0) {
    setTimeout(decreaseTimer, 1000);
    timerValue--;
    document.getElementById("time").innerHTML = timerValue;
  }
  if (timerValue == 0 && health >= 1) clapping.play();
}
decreaseTimer();

//set highest score
function setHighestScore() {
  if (score > localStorage.getItem("alienHighScore")) {
    localStorage.setItem("alienHighScore", score);
    let hsScore = localStorage.getItem("alienHighScore");
    highestScore = hsScore;
  }
}
