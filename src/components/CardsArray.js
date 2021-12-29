import Card from './Card';
import { useState, useEffect } from 'react';

import '../styles/CardsGrid.css';

import Arietty from '../images/Arietty.jpg';
import Arren from '../images/Arren.jpg';
import Chihiro from '../images/Chihiro_Ogino.jpg';
import Howl from '../images/Howl.jpg';
import Jirou from '../images/Jirou_Horikoshi.png';
import Kiki from '../images/Kiki.png';
import Mononoke from '../images/Mononoke.jpg';
import Nausicaa from '../images/Nausicaä.jpg';
import NoFace from '../images/No-Face.jpg';
import Ponyo from '../images/Ponyo.jpg';
import PorcoRosso from '../images/Porco_Rosso.jpg';
import Seiji from '../images/Seiji_Amasawa.jpg';
import Sheeta from '../images/Sheeta.jpg';
import Shizuku from '../images/Shizuku_Tsukishima.jpg';
import Sophie from '../images/Sophie_Hatter.jpg';
import Totoro from '../images/Totoro.jpg';

function CardArray(props) {
  let initialCardsArr = [
    { id: 1, img: Arietty, name: 'Arietty', film: 'The Secret World of Arrietty (2010)' },
    { id: 2, img: Arren, name: 'Arren', film: 'Tales from Earthsea (2006)' },
    { id: 3, img: Chihiro, name: 'Chihiro', film: 'Spirited Away (2001)' },
    { id: 4, img: Howl, name: 'Howl', film: "Howl's Moving Castle  (2004)" },
    { id: 5, img: Jirou, name: 'Jirou', film: 'The Wind Rises (2013)' },
    { id: 6, img: Kiki, name: 'Kiki', film: "Kiki's Delivery Service (1989)" },
    { id: 7, img: Mononoke, name: 'Mononoke', film: 'Princess Mononoke (1997)' },
    { id: 8, img: Nausicaa, name: 'Nausicaä', film: 'Nausicaä of the Valley of the Wind (1984)' },
    { id: 9, img: NoFace, name: 'No Face', film: 'Spirited Away (2001)' },
    { id: 10, img: Ponyo, name: 'Ponyo', film: 'Ponyo on the Cliff by the Sea (2008)' },
    { id: 11, img: PorcoRosso, name: 'Porco', film: 'Porco Rosso (1992)' },
    { id: 12, img: Seiji, name: 'Seiji', film: 'Whisper of the Heart (1995)' },
    { id: 13, img: Sheeta, name: 'Sheeta', film: 'Castle in the Sky (1986)' },
    { id: 14, img: Shizuku, name: 'Shizuku', film: 'Whisper of the Heart (1995)' },
    { id: 15, img: Sophie, name: 'Sophie', film: "Howl's Moving Castle  (2004)" },
    { id: 16, img: Totoro, name: 'Totoro', film: 'My Neighbor Totoro (1988)' },
  ];

  const [cardsArr, setCardsArr] = useState(initialCardsArr);
  const [cardsWrapperKey, setCardsWrapperKey] = useState(0);

  // algorithm -> Fisher-Yates shuffle
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      // swap elements array[i] and array[j]
      // "destructuring assignment" -> same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function updateScore() {
    props.updateCurrentScore(props.currentScore + 1);
  }

  function resetScore() {
    let nextKey = cardsWrapperKey + 1;
    setCardsWrapperKey(nextKey);
    props.resetScore();
  }

  useEffect(() => {
    let copiedArrForShuffle = cardsArr.slice();
    shuffle(copiedArrForShuffle);
    setCardsArr(copiedArrForShuffle);
  }, []);

  useEffect(() => {
    const shuffleArrOnClick = () => {
      let copiedArrForShuffle = cardsArr.slice();
      shuffle(copiedArrForShuffle);
      setCardsArr(copiedArrForShuffle);
    };

    document.querySelectorAll('.card-wrapper').forEach((card) => {
      card.addEventListener('click', shuffleArrOnClick);
    });

    return () => {
      document.querySelectorAll('.card-wrapper').forEach((card) => {
        card.removeEventListener('click', shuffleArrOnClick);
      });
    };
  }, [cardsArr, props]);

  return (
    <div key={cardsWrapperKey} className="cardGridWrapper">
      {cardsArr.map((item) => (
        <Card
          key={item.id}
          src={item.img}
          name={item.name}
          resetScore={resetScore}
          updateScore={updateScore}
        />
      ))}
    </div>
  );
}

export default CardArray;
