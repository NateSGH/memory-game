function Scoreboard(props) {
  return (
    <div className="scoreboard-wraper">
      <p>Current Score: {props.currentScore}</p>
      <p>Best Score: {props.bestScore}</p>
      <p>Max Score: {props.maxScore}</p>
    </div>
  );
}

export default Scoreboard;
