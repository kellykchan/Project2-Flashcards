import './App.css';
import cards from './components/Cards';
import { useState } from 'react';

const App = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const [flipped, setFlipped] = useState(false);

  const nextCard = () => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * cards.length);
    } while (nextIndex === currentIndex && cards.length > 1);
    setCurrentIndex(nextIndex);
    setFlipped(false);
  };

  const card = cards[currentIndex];

  return (
    <div className="App">
      <h1>Labubu Learning</h1>
      <h2>How well do you know about Labubus? Test your knowledge about these little creatures!</h2>
      <h3>Number of Cards: {cards.length}</h3>

      <div className={`flashcard ${flipped ? "flipped" : ""} ${card.difficulty}`} onClick={() => setFlipped(!flipped)}>
        {flipped ? (
          <div>
            <p>{card.answer}</p>
            {card.img && (<img src={card.img} alt="{card.answer}" className="card-image"/>)}
          </div>) : (<p>{card.question}</p>)}
      </div>

      <button className="next-button" onClick={nextCard}>Next</button>
      
    </div>
  )
}

export default App