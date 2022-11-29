import React, { useState, useLayoutEffect, useRef } from "react";
import * as d3 from "d3";
import gsap from "gsap";
import Candle from "./candle";
import { CrossHairs } from "./CrossHairs";
import LineXaxis from "./line-xaxis";
import { LimitNavigation } from "../navigation/limit-button";

const Chart = (props) => {
  const { data, width: chart_width, height: chart_height } = props;

  console.log(data)

  const [mouseCoords, setMouseCoords] = useState({
    x: 0,
    y: 0,
  });

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

  const onMouseLeave = () => {
    setMouseCoords({
      x: 0,
      y: 0,
    });
  };

  const onMouseMoveInside = (e) => {
    setMouseCoords({
      x:
        e.nativeEvent.x -
        Math.round(e.currentTarget.getBoundingClientRect().left),
      y:
        e.nativeEvent.y -
        Math.round(e.currentTarget.getBoundingClientRect().top),
    });
  };

  const onMouseClickInside = (e) => {
    console.log(`Click at ${e.nativeEvent.offsetX}, ${e.nativeEvent.offsetY}`);
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
    .range([0, chart_height]);

  return (
    <>
      <LimitNavigation />
      <div className="absolute left-2 top-2">
        <p className="text-white">Dollars: ${dollarAt(mouseCoords.y)}</p>
      </div>

      <svg
        ref={app}
        width={chart_width}
        height={chart_height}
        className="chart"
        onMouseMove={onMouseMoveInside}
        onClick={onMouseClickInside}
        onMouseLeave={onMouseLeave}
        style={{ overflow: "visible" }}
      >
        {data.map((bar, i) => {
          const candle_x = (chart_width / (data.length + 1)) * (i + 1);
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
        {yScale.ticks().map((max) => (
          <g
            transform={`translate(0,${yScale(max)})`}
            className="text-gray-400"
            key={max}
          >
            <line
              x1="chart_width"
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

        <CrossHairs
          x={mouseCoords.x}
          y={mouseCoords.y}
          chart_dims={chart_dims}
        />
      </svg>
    </>
  );
};
export default Chart;
