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
    <div>
      <h1>Products</h1>
      <Container>
        {allItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Container>
    </div>
  );
}
const Container = styled.div`
  color: blue;
`;

export default Shop;
