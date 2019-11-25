function shuffle(array) {
  const _array = array.slice(0);
  for (let i = 0; i < array.length; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = _array[i];
    _array[i] = _array[randomIndex];
    _array[randomIndex] = temp;
  }
  return _array;
}

export default function initializeDeck() {
  let id = 0;
  const cards = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8'].reduce((acc, type) => {
    acc.push({
      id: id++,
      type
    })
    acc.push({
      id: id++,
      type
    })
    return acc;
  }, []);
  return shuffle(cards);
}