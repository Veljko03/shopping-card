import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function Basket() {
  const [itemsInBasket, setItemsInBasket] = useOutletContext();

  console.log(itemsInBasket, "from basket");

  if (itemsInBasket) {
    return (
      <div>
        <h1>Add something intoBakset and it will be shown here</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Add something into the Bakset and it will be shown here</h1>
      </div>
    );
  }
}

export default Basket;
