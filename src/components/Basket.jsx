import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

function Basket() {
  const [itemsInBasket, setItemsInBasket] = useOutletContext();
  const [num, setNum] = useState(0);
  console.log(itemsInBasket, "from basket");
  let length = itemsInBasket.length;

  const handleDelete = (i) => {
    const index = itemsInBasket.indexOf(i);
    console.log(index, "index");

    console.log(itemsInBasket, "before");
    const newArr = itemsInBasket.filter((item) => item.id !== i.id);
    console.log(newArr, "after");

    setItemsInBasket(newArr);
  };

  if (length != 0) {
    return (
      <Wrapper>
        <Cards>
          {itemsInBasket.map((item) => (
            <StyledItem key={item.id}>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              <p>${item.price}</p>
              <button onClick={() => handleDelete(item)}>Delete</button>
            </StyledItem>
          ))}
        </Cards>
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
