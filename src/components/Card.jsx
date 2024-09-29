import { useState } from "react";
import styled from "styled-components";

function Card({ item }) {
  const [numOfItems, setNumOfItems] = useState(0);

  const handleMinus = () => {
    if (numOfItems >= 1) {
      setNumOfItems((n) => n - 1);
    }
  };

  const handlePlus = () => {
    setNumOfItems((n) => n + 1);
  };
  return (
    <Container>
      <img src={item.image} alt="" />
      <p>{item.title}</p>

      <p>${item.price}</p>
      <NumOfItemsStyle>
        <button onClick={handleMinus}>-</button>
        {numOfItems}
        <button onClick={handlePlus}>+</button>
      </NumOfItemsStyle>
      {/* <button onClick={handleAdding(numOfItems, item)}>Add</button> */}
    </Container>
  );
}
const NumOfItemsStyle = styled.div`
  display: flex;
  gap: 8px;
  border-radius: 8px;
  font-size: 24px;

  button {
    border-radius: 8px;
    font-size: 24px;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  gap: 8px;
  background-color: white;
`;

export default Card;
