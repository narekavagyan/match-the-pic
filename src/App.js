import React, {useState, useEffect} from 'react';
import Board from './components/board/board';
import initializeDeck from './deck';
import GameOver from './components/gameover/gameover';

function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimension] = useState(400);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    resizeBoard() 
    setCards(initializeDeck())
  }, []);

  useEffect(() => {
    preloadImages()
  }, [cards.join(",")]) 

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard)

    return () => window.removeEventListener('resize', resizeListener)
  })

  const handleClick = (id) => {
    setDisabled(true)

    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(false)
    } else {
      if (sameCardClicked(id)) {
        setDisabled(false)
        return
      }
      setFlipped([flipped[0], id])
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id])
        resetCards()
      } else {
        setTimeout(resetCards, 1500)
      }
    }
  }

  const preloadImages = () => {
    cards.map((card) => {
      const src = `${card.type}.jpg`
      console.log(src)
      new Image().src = src
    })
  }

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  const sameCardClicked = (id) => flipped.includes(id)

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id)
    const flippedCard = cards.find((card) => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type
  }

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      ),
    )
  }

  const restartGame = () => {
    window.location.reload()
  }

  const isGameOver = solved.length === 16 && flipped.length === 0
  
  return (
    <div>
      {isGameOver ? <GameOver restartGame={restartGame} /> : 
      <h2 className='title'>Match The Pictures</h2>}
      <Board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
        />
    </div>
  );
}

export default App;
