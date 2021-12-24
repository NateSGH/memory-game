import { useState } from 'react';
import '../styles/Card.css';

function Card(props) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
    console.log('Clicked');
  }

  return (
    <div className={'card-wraper' + (clicked ? ' clicked' : '')} onClick={handleClick}>
      <img src={props.src} alt={props.text} />
      <p className="name">{props.name}</p>
      <p className="film">{props.film}</p>
    </div>
  );
}

export default Card;
