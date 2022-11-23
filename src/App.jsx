import { Main } from "./components/layout/Main";
import React from "react";
import ScreenProvider from "./context/Screen/ScreenProvider";
import StockDataProvider from "./context/data/stock-data";

function App() {
  return (
    <div className="App">
      <StockDataProvider>
        <ScreenProvider>
          <Main />
        </ScreenProvider>
      </StockDataProvider>
    </div>
  );
}

export default App;
