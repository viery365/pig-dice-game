var scores, roundScore, activePlayer, gamePlaying;

init();

document.getElementById("btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    //1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;
    //2. Display the result
    var diceDom = document.getElementById("dice");
    diceDom.style.display = "block";
    diceDom.src = "img/dice-" + dice + ".png";

    //3. Update the round score but only if the rolled number was not a 1
    if (dice !== 1) {
      roundScore += dice;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
});

document.getElementById("btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    //Add current score to the global score
    scores[activePlayer] += roundScore;

    //Update the UI
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    //Check if player won the game
    if (scores[activePlayer] >= 100) {
      document.getElementById("name-" + activePlayer).textContent = "Winner!";
      document.getElementById("dice").style.display = "none";
      document
        .getElementById("player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .getElementById("player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.getElementById("player-0-panel").classList.toggle("active");
  document.getElementById("player-1-panel").classList.toggle("active");

  document.getElementById("dice").style.display = "none";
}

document.getElementById("btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.getElementById("dice").style.display = "none";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.getElementById("player-0-panel").classList.remove("winner");
  document.getElementById("player-1-panel").classList.remove("winner");
  document.getElementById("player-0-panel").classList.remove("active");
  document.getElementById("player-1-panel").classList.remove("active");
  document.getElementById("player-0-panel").classList.add("active");
}
