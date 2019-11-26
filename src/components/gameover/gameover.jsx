import React from 'react';
import './gameover.css';

const GameOver = ({ isOver }) => (
  <div className="justify-right">
    <h1>You Win!</h1>
    <button className="restart-button" onClick={isOver}>Restart Game</button>
  </div>
);

export default GameOver;