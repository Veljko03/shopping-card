import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { ShoppingBasket } from "lucide-react";
import { useState, useEffect } from "react";

function NavigationBar() {
  const [itemsInbasket, setItemsInBasket] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("items");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const count = itemsInbasket.length;

  useEffect(() => {
    // storing input name
    localStorage.setItem("items", JSON.stringify(itemsInbasket));
  }, [itemsInbasket]);
  return (
    <div className="container">
      <header>
        <Wrapper>
          <h1>TOP Shop</h1>
          <HomeShop>
            <Link to={"/"}>Home</Link>
            <Link to={"shop"}>Shop</Link>
          </HomeShop>

          <Basket>
            {count >= 1 ? (
              <Link to={"basket"}>
                {<ShoppingBasket size={48} />}
                {count}
              </Link>
            ) : (
              <Link to={"basket"}>{<ShoppingBasket size={48} />}</Link>
            )}
          </Basket>
        </Wrapper>
      </header>
      <Main>
        <Outlet context={[itemsInbasket, setItemsInBasket]} />
      </Main>
    </div>
  );
}
const HomeShop = styled.div`
  display: flex;
  gap: 40px;
  margin-left: auto;
  margin-right: 100px;
  font-size: 32px;
  justify-items: center;
  a {
    color: white;
  }
  div {
    &:hover {
      cursor: pointer;
    }
  }
`;

const Basket = styled.div`
  margin-left: 100px;
  margin-right: 12px;
  a {
    color: white;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Main = styled.div`
  display: flex;
  height: 100%;
  margin: 0;
`;

const Wrapper = styled.div`
  h1 {
    color: white;
    font-size: 36px;
  }
  display: flex;
  padding: 36px;
  background-color: #484646;
`;

export default NavigationBar;
