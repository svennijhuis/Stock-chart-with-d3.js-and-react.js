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

  if (!data) return <div>loading...</div>;

  return (
    <>
      <Chart data={data} width={chart_width} height={chart_height} />
    </>
  );
};
