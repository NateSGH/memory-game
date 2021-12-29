import { useState } from 'react';
import '../styles/Card.css';

function Card(props) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    if (clicked === true) {
      props.resetScore();
    } else {
      props.updateScore();
    }
    setClicked(!clicked);
  }

  return (
    <div className={'card-wrapper' + (clicked ? ' clicked' : '')} onClick={handleClick}>
      <img src={props.src} alt={props.text} />
      <p className="name">{props.name}</p>
      <p className="film">{props.film}</p>
    </div>
  );
}

export default Card;
