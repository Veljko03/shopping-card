import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

function Basket() {
  const [itemsInBasket, setItemsInBasket] = useOutletContext();
  let length = itemsInBasket.length;

  const handleDelete = (i) => {
    const index = itemsInBasket.indexOf(i);

    const newArr = itemsInBasket.filter((item) => item.id !== i.id);

    setItemsInBasket(newArr);
  };

  const handleMinus = (item) => {
    if (item.numOfItems > 1) {
      const index = itemsInBasket.indexOf(item);
      const copy = [...itemsInBasket];
      copy[index].numOfItems -= 1;
      console.log(copy, "copy");
      console.log(itemsInBasket, "before");

      setItemsInBasket(copy);
    }
  };

  const handlePlus = (item) => {
    const index = itemsInBasket.indexOf(item);
    const copy = [...itemsInBasket];
    copy[index].numOfItems += 1;
    setItemsInBasket(copy);
  };

  const PricesAndItems = itemsInBasket.map(({ price, numOfItems }) => ({
    price,
    numOfItems,
  }));

  let sum = 0;

  for (let i = 0; i < PricesAndItems.length; i++) {
    sum = sum + PricesAndItems[i].price * PricesAndItems[i].numOfItems;
  }
  sum = Math.round(sum * 100) / 100;
  if (length != 0) {
    return (
      <Wrapper>
        <Cards>
          {itemsInBasket.map((item) => (
            <StyledItem key={item.id}>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              <p>${item.price}</p>
              <NumOfItemsStyle>
                <button onClick={() => handleMinus(item)}>-</button>
                {item.numOfItems}
                <button onClick={() => handlePlus(item)}>+</button>
              </NumOfItemsStyle>
              <button onClick={() => handleDelete(item)}>Delete</button>
            </StyledItem>
          ))}
        </Cards>
        <h1>Total price ${sum}</h1>
      </Wrapper>
    );
  } else {
    return (
      <div>
        <h1>Add something into the Bakset and it will be shown here</h1>
      </div>
    );
  }
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
const StyledItem = styled.div`
  display: flex;
  gap: 20px;
  justify-items: center;
  align-items: center;
  img {
    max-height: 140px;
    max-width: 100px;
  }
`;
const Cards = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 40px;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  /* justify-items: center;
  align-items: center; */
  margin-top: 40px;
  margin-left: 100px;
`;

export default Basket;
