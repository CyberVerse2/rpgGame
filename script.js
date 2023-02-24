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
roundWonText.classList.add("hidden");
robotChoice.classList.add("hidden");
logic = (state) => {
  let choices = ["Rock", "Paper", "Scissors"];
  robotAnswer = choices[Math.floor(Math.random() * choices.length)];
  robotChoice.textContent = `ROBOT'S CHOICE:  ${robotAnswer}`;
  roundWonText.classList.remove("hidden");
  robotChoice.classList.remove("hidden");

  // --------------------------------Game logic---------------------------------------------------------------//
  if (!gameOver) {
    // -------------------------For Computer: Rock-------------------------------//
    if (robotAnswer == "Rock" && state == "Rock") {
      roundWonText.textContent = "Draw";
      console.log("Draw");
    } else if (robotAnswer == "Paper" && state == "Rock") {
      robotScore++;
      robotScoreText.textContent = robotScore;
      roundWonText.textContent = "Computer won round";
    } else if (robotAnswer == "Scissors" && state == "Rock") {
      playerScore++;
      playerScoreText.textContent = playerScore;
      roundWonText.textContent = "Player won round";
    }
    // ----------------------------------------------------------------------------//

    // -------------------------For Computer: Paper-------------------------------//
    else if (robotAnswer == "Rock" && state == "Paper") {
      playerScore++;
      playerScoreText.textContent = playerScore;
      roundWonText.textContent = "Player won round";
    } else if (robotAnswer == "Paper" && state == "Paper") {
      roundWonText.textContent = "Draw";
    } else if (robotAnswer == "Scissors" && state == "Paper") {
      robotScore++;
      robotScoreText.textContent = robotScore;
      roundWonText.textContent = "Computer won round";
    }
    // -----------------------------------------------------------------------------//

    // -------------------------For Computer: Scissors-------------------------------//
    else if (robotAnswer == "Rock" && state == "Scissors") {
      robotScore++;
      robotScoreText.textContent = robotScore;
      roundWonText.textContent = "Computer won round";
    } else if (robotAnswer == "Paper" && state == "Scissors") {
      playerScore++;
      playerScoreText.textContent = playerScore;
      roundWonText.textContent = "Player won round";
    } else if (robotAnswer == "Scissors" && state == "Scissors") {
      roundWonText.textContent = "Draw";
    }
    // -----------------------------------------------------------------------------//

    // ---------------------------Endgame logic--------------------------------------//
    if (playerScore == 5) {
      wonText.textContent = "Player Won Overall rounds";
      gameOver = true;
    } else if (robotScore == 5) {
      wonText.textContent = "Computer Won Overall rounds";
      gameOver = true;
    } else if (playerScore === robotScore) {
      wonText.textContent = "Draw";
    }
  }
};
// -----------------------------------------------------------------------------//

// ------------------------------------------------------------------------------------------------//

resetBtn.addEventListener("click", function () {
  gameOver = false;
  robotScore = 0;
  playerScore = 0;
  robotScoreText.textContent = "0";
  playerScoreText.textContent = "0";
  wonText.textContent = "";
  roundWonText.textContent = "Estandia";
  roundWonText.classList.add("hidden");
});
