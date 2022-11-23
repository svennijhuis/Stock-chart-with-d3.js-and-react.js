import Chart from "./chart";
import React, { useState, useEffect } from "react";
import { fetchData } from "../../functions/fetch-stock-data";
import { TimeButton } from "../navigation/time-button";
import { useStockDataContext } from "../../context/data/stock-data";
import { NavigationDate } from "../navigation/navigation-date";

export const CandleStickChart = () => {
  const { data, date, stock, dataLimit } = useStockDataContext();

  const chart_width = 1000;
  const chart_height = 500;

  let bars_displayed = 40;
  let last_bar_displayed = 0;

  if (!data) return <div>loading...</div>;

  return (
    <>
      <div className="flex flex-row gap-2">
      <NavigationDate />
      </div>
      <Chart data={data} width={chart_width} height={chart_height} />
    </>
  );
};
