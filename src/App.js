import './styles/App.css';
import CardArray from './components/CardsArray';
import Scoreboard from './components/Scoreboard';
import { useState } from 'react';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setbestScore] = useState(0);

  function updateCurrentScore(newScore) {
    setCurrentScore(newScore);
  }

  function resetScore() {
    if (currentScore > bestScore) {
      setbestScore(currentScore);
    }
    setCurrentScore(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Studio Ghibli Memory Game</h1>
      </header>
      <div className="main-content-wrapper">
        <Scoreboard currentScore={currentScore} bestScore={bestScore} maxScore={16} />
        <CardArray
          updateCurrentScore={updateCurrentScore}
          currentScore={currentScore}
          resetScore={resetScore}
        />
      </div>
    </div>
  );
}

export default App;
