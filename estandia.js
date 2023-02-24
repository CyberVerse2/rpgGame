window.onload = () => {
  const imgSet = document.querySelectorAll("img");
  const resetBtn = document.querySelector("button");
  const score = document.querySelectorAll("h3");
  const wonText = document.querySelector("#overall-won");
  const roundWonText = document.querySelector("#won-round");
  let robotChoice = document.querySelector(".stripe>h4");

  let robotScoreText = score[0];
  let playerScoreText = score[1];
  const rockImg = imgSet[0];
  const paperImg = imgSet[1];
  const scissorsImg = imgSet[2];

  let robotScore = 0;
  let playerScore = 0;
  let gameOver = false;

  logic = (state) => {
    let choices = ["rock", "paper", "scissors"];
    robotAnswer = choices[Math.floor(Math.random() * choices.length)];
    robotChoice.innerHTML = `ROBOT'S CHOICE:  ${robotAnswer}`;

    // --------------------------------Game logic---------------------------------------------------------------//
    if (!gameOver) {
      // -------------------------For Computer: Rock-------------------------------//
      if (robotAnswer == "rock" && state == "rock") {
        roundWonText.innerHTML = "Draw";
      } else if (robotAnswer == "paper" && state == "rock") {
        robotScore++;
        robotScoreText.innerHTML = robotScore;
        roundWonText.innerHTML = "Computer won round";
      } else if (robotAnswer == "scissors" && state == "rock") {
        playerScore++;
        playerScoreText.innerHTML = playerScore;
        roundWonText.innerHTML = "Player won round";
      }
      // ----------------------------------------------------------------------------//

      // -------------------------For Computer: Paper-------------------------------//
      else if (robotAnswer == "rock" && state == "paper") {
        playerScore++;
        playerScoreText.innerHTML = playerScore;
        roundWonText.innerHTML = "Player won round";
      } else if (robotAnswer == "paper" && state == "paper") {
        roundWonText.innerHTML = "Draw";
      } else if (robotAnswer == "scissors" && state == "paper") {
        robotScore++;
        robotScoreText.innerHTML = robotScore;
        roundWonText.innerHTML = "Computer won round";
      }
      // -----------------------------------------------------------------------------//

      // -------------------------For Computer: Scissors-------------------------------//
      else if (robotAnswer == "rock" && state == "scissors") {
        robotScore++;
        robotScoreText.innerHTML = robotScore;
        roundWonText.innerHTML = "Computer won round";
      } else if (robotAnswer == "paper" && state == "scissors") {
        playerScore++;
        playerScoreText.innerHTML = playerScore;
        roundWonText.innerHTML = "Player won round";
      } else if (robotAnswer == "scissors" && state == "scissors") {
        roundWonText.innerHTML = "Draw";
      }
      // -----------------------------------------------------------------------------//

      // ---------------------------Endgame logic--------------------------------------//
      if (playerScore == 5) {
        wonText.innerHTML = "Player Won Overall rounds";
        gameOver = true;
      } else if (robotScore == 5) {
        wonText.innerHTML = "Computer Won Overall rounds";
        gameOver = true;
      } else if (playerScore === robotScore) {
        wonText.innerHTML = "Draw";
      }
    }
  };
  // -----------------------------------------------------------------------------//

  // ------------------------------------------------------------------------------------------------//

  resetBtn.addEventListener("click", function () {
    gameOver = false;
    robotScore = 0;
    playerScore = 0;
    robotScoreText.innerHTML = "0";
    playerScoreText.innerHTML = "0";
    wonText.innerHTML = "";
    roundWonText.innerHTML = "";
  });
};
