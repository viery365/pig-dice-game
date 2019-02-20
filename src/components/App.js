import React, { Component, Fragment } from 'react';

import dice5 from '../img/dice-5.png';

function Reset() {
  return (
    <button id="btn-new">
      <i className="ion-ios-plus-outline" />
      New game
    </button>
  );
}

function Roll() {
  return (
    <button id="btn-roll">
      <i className="ion-ios-loop" />
      Roll dice
    </button>
  );
}

function Hold() {
  return (
    <button id="btn-hold">
      <i className="ion-ios-download-outline" />
      Hold
    </button>
  );
}

function Controllers() {
  return (
    <Fragment>
      <Roll />
      <Hold />
    </Fragment>
  );
}

function PlayerPanel(props) {
  const { id } = props;
  return (
    <div id={`player-${id}-panel`} className={props.active}>
      <div className="player-name" id={`name-${id}`}>
        Player {id + 1}
      </div>
      <div className="player-score" id={`score-${id}`}>
        {props.score}
      </div>
      <div className="player-current-box">
        <div className="player-current-label">Current</div>
        <div className="player-current-score" id={`current-${id}`}>
          {props.current}
        </div>
      </div>
    </div>
  );
}

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     playerOneactive: true,
  //     playerTwoActive: false,
  //   };
  // }

  render() {
    return (
      <div id="wrapper" className="clearfix">
        <Reset />
        <PlayerPanel id={0} active="active" score={0} current={0} />
        <PlayerPanel id={1} active="" score={0} current={0} />

        <Controllers />

        {/* <img src={dice5} alt="Dice" id="dice" /> */}
      </div>
    );
  }
}

export default App;
