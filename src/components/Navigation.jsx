import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { ShoppingBasket } from "lucide-react";

function NavigationBar() {
  return (
    <div>
      <header>
        <Wrapper>
          <h1>Akatskuki shop</h1>
          <HomeShop>
            <Link to={"/"}>Home</Link>
            <Link to={"shop"}>Shop</Link>
          </HomeShop>

          <Basket>
            <Link to={"basket"}>{<ShoppingBasket size={48} />}</Link>
          </Basket>
        </Wrapper>
      </header>
      <main>
        <Outlet />
      </main>
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

  div {
    &:hover {
      cursor: pointer;
    }
  }
`;

const Basket = styled.div`
  margin-left: 100px;
  margin-right: 12px;
  &:hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: flex;
  padding: 36px;
`;

export default NavigationBar;
