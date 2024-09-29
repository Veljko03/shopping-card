import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

function Basket() {
  const [itemsInBasket, setItemsInBasket] = useOutletContext();

  console.log(itemsInBasket, "from basket");

  if (itemsInBasket) {
    return (
      <Wrapper>
        {itemsInBasket.map((item) => (
          <StyledItem key={item.id}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p>${item.price}</p>
            <button>Delete</button>
          </StyledItem>
        ))}
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

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  /* justify-items: center;
  align-items: center; */
  margin-top: 40px;
  margin-left: 100px;
`;

export default Basket;
