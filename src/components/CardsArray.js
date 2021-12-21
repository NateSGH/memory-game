import Card from './Card';
import Kiki from '../images/Kiki.jpg';
import Ponyo from '../images/Ponyo.png';
import Teto from '../images/Teto.png';
import Arren from '../images/Arren.png';

function CardArray() {
  return (
    <div>
      <Card src={Kiki} text={'Kiki'} />
      <Card src={Ponyo} text={'Ponyo'} />
      <Card src={Teto} text={'Teto'} />
      <Card src={Arren} text={'Arren'} />
    </div>
  );
}

export default CardArray;
