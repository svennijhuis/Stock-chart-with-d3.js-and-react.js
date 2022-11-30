import Chart from "./chart";
import React from "react";
import { useStockDataContext } from "../../context/data/stock-data";
import { useScreenContext } from "../../context/Screen/ScreenProvider";
import { Loading } from "../loading/loading";

export const CandleStickChart = () => {
  const { data, newsData } = useStockDataContext();
  const { width } = useScreenContext();

  const chart_width = width;
  const chart_height = 700;

  if (!newsData)
    return (
      <div className=" p-1 mt-12 md:mt-0 relative flex flex-col items-center justify-center">
        <Loading />
        <p className="text-white text-14 leading-20 text-center md:w-1/2">
          We gaan te snel de API kan her niet aan. Wacht 1 minuut en herlaadt de
          pagina!
        </p>
      </div>
    );

  return (
    <>
      <Chart data={data} width={chart_width} height={chart_height} />
    </>
  );
};
