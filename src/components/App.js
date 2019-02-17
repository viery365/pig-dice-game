import React, { Component } from "react";

import dice5 from "./../img/dice-5.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="wrapper" className="clearfix">
          <div id="player-0-panel" className="active">
            <div className="player-name" id="name-0">
              Player 1
            </div>
            <div className="player-score" id="score-0">
              43
            </div>
            <div className="player-current-box">
              <div className="player-current-label">Current</div>
              <div className="player-current-score" id="current-0">
                11
              </div>
            </div>
          </div>

          <div id="player-1-panel">
            <div className="player-name" id="name-1">
              Player 2
            </div>
            <div className="player-score" id="score-1">
              72
            </div>
            <div className="player-current-box">
              <div className="player-current-label">Current</div>
              <div className="player-current-score" id="current-1">
                0
              </div>
            </div>
          </div>

          <button id="btn-new">
            <i className="ion-ios-plus-outline" />
            New game
          </button>
          <button id="btn-roll">
            <i className="ion-ios-loop" />
            Roll dice
          </button>
          <button id="btn-hold">
            <i className="ion-ios-download-outline" />
            Hold
          </button>

          <img src={dice5} alt="Dice" id="dice" />
        </div>
      </div>
    );
  }
}

export default App;
