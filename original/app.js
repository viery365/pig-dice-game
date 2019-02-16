var scores, roundScore, activePlayer, gamePlaying;

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;
  var doc = document;
  var player0Panel = doc.getElementById("player-0-panel");
  var player1Panel = doc.getElementById("player-1-panel");

  doc.getElementById("dice").style.display = "none";
  doc.getElementById("score-0").textContent = "0";
  doc.getElementById("score-1").textContent = "0";
  doc.getElementById("current-0").textContent = "0";
  doc.getElementById("current-1").textContent = "0";
  doc.getElementById("name-0").textContent = "Player 1";
  doc.getElementById("name-1").textContent = "Player 2";
  player0Panel.classList.remove("winner");
  player1Panel.classList.remove("winner");
  player0Panel.classList.remove("active");
  player1Panel.classList.remove("active");
  player0Panel.classList.add("active");
}

function nextPlayer() {
  var doc = document;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  doc.getElementById("current-0").textContent = "0";
  doc.getElementById("current-1").textContent = "0";

  doc.getElementById("player-0-panel").classList.toggle("active");
  doc.getElementById("player-1-panel").classList.toggle("active");

  doc.getElementById("dice").style.display = "none";
}

init();

document.getElementById("btn-roll").addEventListener("click", function() {
  var doc = document;
  var diceDom = doc.getElementById("dice");
  if (gamePlaying) {
    //1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;
    //2. Display the result
    diceDom.style.display = "block";
    diceDom.src = "img/dice-" + dice + ".png";

    //3. Update the round score but only if the rolled number was not a 1
    if (dice !== 1) {
      roundScore += dice;
      doc.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
});

document.getElementById("btn-hold").addEventListener("click", function() {
  var doc = document;
  if (gamePlaying) {
    //Add current score to the global score
    scores[activePlayer] += roundScore;

    //Update the UI
    doc.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    //Check if player won the game
    if (scores[activePlayer] >= 100) {
      doc.getElementById("name-" + activePlayer).textContent = "Winner!";
      doc.getElementById("dice").style.display = "none";
      doc
        .getElementById("player-" + activePlayer + "-panel")
        .classList.add("winner");
      doc
        .getElementById("player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

document.getElementById("btn-new").addEventListener("click", init);
