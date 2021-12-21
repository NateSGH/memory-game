function Card(props) {
  return (
    <div className="card-wraper">
      <img src={props.src} alt={props.text} />
      <p>{props.text}</p>
    </div>
  );
}

export default Card;
