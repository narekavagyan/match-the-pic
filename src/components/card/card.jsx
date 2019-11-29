import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './card.css';

function Card({handleClick, id, type, flipped, solved, height, width, disabled}) {
  return <div
    className={`flip-container ${flipped || solved ? 'flipped' : ''}`}
    style={{width, height}}
    onClick={() => disabled ? null : handleClick(id)}
  >
    <div className='flipper'>
      <img
        style={{height, width}}
        className={flipped || solved ? 'front' : 'back'}
        src={flipped || solved ? `${type}.jpg` : 'back.png'}
      />
    </div>
  </div>
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired
}

export default Card;