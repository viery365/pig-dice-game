import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import dice1 from '../img/dice-1.png';
import dice2 from '../img/dice-2.png';
import dice3 from '../img/dice-3.png';
import dice4 from '../img/dice-4.png';
import dice5 from '../img/dice-5.png';
import dice6 from '../img/dice-6.png';

const dice = [];

dice.push(dice1, dice2, dice3, dice4, dice5, dice6);

function PlayerPanel(props) {
  const { id, score } = props;
  return (
    <div id={`player-${id}-panel`} className={props.active}>
      <div className="player-name" id={`name-${id}`}>
        {score >= 100 ? 'Winner!' : `Player ${id + 1}`}
      </div>
      <div className="player-score" id={`score-${id}`}>
        {score}
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

PlayerPanel.propTypes = {
  id: PropTypes.number.isRequired,
  active: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired
};

function Controllers(props) {
  return (
    <Fragment>
      <button id="btn-roll" onClick={props.onRoll}>
        <i className="ion-ios-loop" />
        Roll dice
      </button>
      <button id="btn-hold" onClick={props.onHold}>
        <i className="ion-ios-download-outline" />
        Hold
      </button>
    </Fragment>
  );
}

Controllers.propTypes = {
  onRoll: PropTypes.func.isRequired
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneScore: 0,
      playerTwoScore: 0,
      activePlayer: 1,
      playerOneCurrentScore: 0,
      playerTwoCurrentScore: 0,
      gamePlaying: true,
      diceNumber: null
    };

    this.rollDice = this.rollDice.bind(this);
    this.holdScore = this.holdScore.bind(this);
  }

  hideDiceNumber() {
    this.setState(() => ({ diceNumber: null }));
  }

  addPlayerScore() {
    this.setState(() => ({
      playerOneScore: this.state.playerOneScore + this.state.playerOneCurrentScore,
      playerTwoScore: this.state.playerTwoScore + this.state.playerTwoCurrentScore
    }));
  }

  holdScore() {
    if (this.state.gamePlaying) {
      this.addPlayerScore();
      this.hideDiceNumber();
    }
  }

  nextPlayer(diceNumber) {
    this.setState(() => ({
      diceNumber,
      activePlayer: this.state.activePlayer === 1 ? 2 : 1,
      playerOneCurrentScore: this.state.playerOneCurrentScore && 0,
      playerTwoCurrentScore: this.state.playerTwoCurrentScore && 0
    }));
  }

  setCurrentScore(diceNumber) {
    if (this.state.activePlayer === 1) {
      return this.setState(() => ({
        diceNumber,
        playerOneCurrentScore: this.state.playerOneCurrentScore + diceNumber
      }));
    }
    return this.setState(() => ({
      diceNumber,
      playerTwoCurrentScore: this.state.playerTwoCurrentScore + diceNumber
    }));
  }

  rollDice() {
    if (this.state.gamePlaying) {
      const diceNumber = Math.floor(Math.random() * 6) + 1;
      if (diceNumber !== 1) {
        return this.setCurrentScore(diceNumber);
      }
      return this.nextPlayer(diceNumber);
    }
    return null;
  }

  render() {
    return (
      <div id="wrapper" className="clearfix">
        <button id="btn-new">
          <i className="ion-ios-plus-outline" />
          New game
        </button>
        <PlayerPanel
          id={0}
          active={this.state.activePlayer === 1 ? 'active' : ''}
          score={this.state.playerOneScore}
          current={this.state.playerOneCurrentScore}
        />
        <PlayerPanel
          id={1}
          active={this.state.activePlayer === 2 ? 'active' : ''}
          score={this.state.playerTwoScore}
          current={this.state.playerTwoCurrentScore}
        />
        <Controllers onRoll={this.rollDice} onHold={this.holdScore} />
        {this.state.diceNumber && (
          <img
            src={dice[this.state.diceNumber - 1]}
            alt="Dice"
            id="dice"
            style={{ display: 'block' }}
          />
        )}
      </div>
    );
  }
}

export default App;
