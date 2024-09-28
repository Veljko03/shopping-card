function Card({ item }) {
  return (
    <div>
      {item.title}
      <p>{item.price}</p>
    </div>
  );
}

export default Card;
