import './styles/App.css';
import Card from './components/Card';
import Scoreboard from './components/Scoreboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Studio Ghibli Memory Game</h1>
      </header>

      <Scoreboard currentScore={10} bestScore={12} maxScore={18} />
      <Card number={1} />
      <Card number={2} />
      <Card number={3} />
      <Card number={4} />
    </div>
  );
}

export default App;
