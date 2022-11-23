import { CircleButton } from "./circle-button";
import { useState } from "react";
import { useStockDataContext } from "../../context/data/stock-data";
export const Navigation = () => {
  const { stock, setStock } = useStockDataContext();

  function onChangeValue(event) {
    setStock(event.target.value);
    console.log(event.target.value);
  }
  return (
    <>
      <div className="container flex justify-around flex-row mt-6 mb-12">
        <div>
          <input
            onChange={onChangeValue}
            type="radio"
            value="aapl"
            name="stock"
            checked={stock === "aapl"}
          />
          <input
            onChange={onChangeValue}
            type="radio"
            value="tsla"
            name="stock"
            checked={stock === "tsla"}
          />
          <input
            onChange={onChangeValue}
            type="radio"
            value="googl"
            name="stock"
            checked={stock === "googl"}
          />
        </div>
      </div>
    </>
  );
};
