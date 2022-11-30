import React, { useLayoutEffect, useRef } from "react";
import * as d3 from "d3";
import gsap from "gsap";
import Candle from "./candle";
import LineXaxis from "./line-xaxis";
import { LimitNavigation } from "../navigation/limit-button";

const Chart = (props) => {
  const { data, width: chart_width, height: chart_height } = props;

  // find the high and low bounds of all the bars being sidplayed
  const dollar_high = d3.max(data.map((bar) => bar.hight)) * 1.05;
  const dollar_low = d3.min(data.map((bar) => bar.low)) * 0.95;

  const chart_dims = {
    pixel_width: chart_width,
    pixel_height: chart_height,
    dollar_high,
    dollar_low,
    dollar_delta: dollar_high - dollar_low,
  };

  const dollarAt = (pixel) => {
    const dollar =
      (Math.abs(pixel - chart_dims.pixel_height) / chart_dims.pixel_height) *
        chart_dims.dollar_delta +
      chart_dims.dollar_low;

    return pixel > 0 ? dollar.toFixed(2) : "-";
  };

  const pixelFor = (dollar) => {
    return Math.abs(
      ((dollar - chart_dims["dollar_low"]) / chart_dims["dollar_delta"]) *
        chart_dims["pixel_height"] -
        chart_dims["pixel_height"]
    );
  };

  // calculate the candle width
  const candleWidth = Math.floor((chart_width / data.length) * 0.7);

  const app = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".animate",
        { opacity: 0 },
        {
          stagger: 0.03,
          duration: 0.03,
          opacity: 1,
        }
      );
    }, app);

    return () => ctx.revert();
  }, [data]);

  let yScale = d3
    .scaleLinear()
    .domain(d3.extent(data.map((d) => d.hight)))
    .range([chart_height, 0]);

  return (
    <>
      <LimitNavigation />

      <svg
        ref={app}
        width={chart_width}
        height={chart_height}
        className="chart"
        style={{ overflow: "visible" }}
      >
        <g transform="translate(30,0)">
          {data.map((bar, i) => {
            const candle_x = ((chart_width - 30) / (data.length + 1)) * (i + 1);
            return (
              <>
                {i % 5 === 0 && (
                  <LineXaxis key={i + "Line"} x={candle_x} time={bar.time} />
                )}

                <Candle
                  className="animate"
                  key={i}
                  data={bar}
                  x={candle_x}
                  candleWidth={candleWidth}
                  pixelFor={pixelFor}
                />
              </>
            );
          })}
        </g>
        {yScale.ticks().map((max) => (
          <g
            transform={`translate(0,${yScale(max)})`}
            className="text-gray-400"
            key={max}
          >
            <line
              x1="20"
              x2={chart_width}
              stroke="currentColor"
              strokeDasharray="3"
            />
            <text
              alignmentBaseline="middle"
              className="text-[10px]"
              fill="currentColor"
            >
              {max}
            </text>
          </g>
        ))}
      </svg>
    </>
  );
};
export default Chart;
