import React from 'react';
import './gameover.css'

const GameOver = ({ restartGame }) => (
  <div className="justify-center">
    <h1>YOU WIN!</h1>
    <button className="restart-button" onClick={restartGame}>Restart Game</button>
  </div>
);

export default GameOver;