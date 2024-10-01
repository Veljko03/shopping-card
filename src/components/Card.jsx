import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

function Card({ item, sendDataToParent }) {
  const [numOfItems, setNumOfItems] = useState(0);
  const [itemsInBasket, setItemsInBasket, ,] = useOutletContext();

  console.log(itemsInBasket);
  const handleAdding = (item) => {
    if (numOfItems >= 1) {
      const filteredItemsInBasket = itemsInBasket.map((item) => item.id);
      console.log(filteredItemsInBasket, ",this is filtered");

      const check = filteredItemsInBasket.includes(item.id);

      if (check) {
        item.numOfItems += numOfItems;
        setNumOfItems(0);
        alert("item updated");
      } else {
        if (!item.numOfItems) {
          item.numOfItems = numOfItems;
        }

        setItemsInBasket([...itemsInBasket, item]);
        setNumOfItems(0);
        alert("item added");
      }
    } else {
      alert("Number of items must be at least 1!");
    }
  };

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
      <button onClick={() => handleAdding(item)}>Add</button>
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
