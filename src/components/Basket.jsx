import { useEffect, useState } from "react";

function Basket() {
  const [itemsInBasket, setItemsInBasket] = useState(null);
  if (itemsInBasket) {
    return (
      <div>
        <h1>Add something intoBakset and it will be shown here</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>hello form Basket</h1>
      </div>
    );
  }
}

export default Basket;
