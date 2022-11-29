import Chart from "./chart";
import React from "react";
import { useStockDataContext } from "../../context/data/stock-data";
import { NavigationDate } from "../navigation/navigation-date";
import { useScreenContext } from "../../context/Screen/ScreenProvider";

export const CandleStickChart = () => {
  const { data } = useStockDataContext();
  const { width, height } = useScreenContext();

  const chart_width = width;
  const chart_height = 700;

  if (!data.open) return <div>herlaadt over 1 minuut opnieuw we zitten aan de maximaals cals</div>;

  return (
    <>
      <Chart data={data} width={chart_width} height={chart_height} />
    </>
  );
};
