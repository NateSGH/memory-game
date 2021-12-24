import './styles/App.css';
import CardArray from './components/CardsArray';
import Scoreboard from './components/Scoreboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Studio Ghibli Memory Game</h1>
      </header>
      <div className="main-content-wrapper">
        <Scoreboard currentScore={10} bestScore={12} maxScore={18} />
        <CardArray />
      </div>
    </div>
  );
}

export default App;
