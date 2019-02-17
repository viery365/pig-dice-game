import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="wrapper" class="clearfix">
          <div id="player-0-panel" class="active">
            <div class="player-name" id="name-0">Player 1</div>
            <div class="player-score" id="score-0">43</div>
            <div class="player-current-box">
              <div class="player-current-label">Current</div>
              <div class="player-current-score" id="current-0">11</div>
            </div>
          </div>

          <div id="player-1-panel">
            <div class="player-name" id="name-1">Player 2</div>
            <div class="player-score" id="score-1">72</div>
            <div class="player-current-box">
              <div class="player-current-label">Current</div>
              <div class="player-current-score" id="current-1">0</div>
            </div>
          </div>

          <button id="btn-new"><i class="ion-ios-plus-outline"></i>New game</button>
          <button id="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button>
          <button id="btn-hold"><i class="ion-ios-download-outline"></i>Hold</button>

          <img src="img/dice-5.png" alt="Dice" id="dice" />
        </div>
      </div>
    );
  }
}

export default App;
