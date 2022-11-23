import { CircleButton } from "./circle-button";
import { useState } from "react";
import { useStockDataContext } from "../../context/data/stock-data";
export const NavigationDate = () => {
  const { date, setDate } = useStockDataContext();

  function onChangeValue(event) {
    setDate(event.target.value);
    console.log(event.target.value);
  }
  return (
    <>
      <div className="container flex justify-around flex-row mt-6 mb-12">
        <div>
          <input
            onChange={onChangeValue}
            type="radio"
            value="daily"
            name="date"
            checked={date === "daily"}
          />
          <input
            onChange={onChangeValue}
            type="radio"
            value="weekly"
            name="date"
            checked={date === "weekly"}
          />
          <input
            onChange={onChangeValue}
            type="radio"
            value="monthly"
            name="date"
            checked={date === "monthly"}
          />
        </div>
      </div>
    </>
  );
};
