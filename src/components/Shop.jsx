import { useEffect, useState } from "react";
import NavigationBar from "./Navigation";
import styled from "styled-components";
import Card from "./Card";

function Shop() {
  const [allItems, setAllItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=18", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((json) => setAllItems(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  console.log(allItems);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  return (
    <All>
      <h1>Products</h1>
      <Container>
        {allItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Container>
    </All>
  );
}

const All = styled.div`
  background-color: #f2dfdf;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  h1 {
    margin: 20px;
  }
`;

const Container = styled.div`
  display: grid;
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 32px;
  gap: 32px;

  grid-template-columns: repeat(6, minmax(250px, 1fr));

  img {
    max-height: 240px;
    max-width: 200px;
  }
`;

export default Shop;
