import { useState } from "react";
import NavigationBar from "./components/Navigation";

import styled from "styled-components";

function App() {
  return (
    <Wrap>
      <h1>Welcome to the home page!</h1>
      <h3>
        This shop is filled with fake products for your browsing pleasure :D
      </h3>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;

  width: 100%;
`;

export default App;
