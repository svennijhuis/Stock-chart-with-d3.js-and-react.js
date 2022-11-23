import React, { useState, useLayoutEffect, useRef } from "react";
import * as d3 from "d3";
import gsap from "gsap";

import Candle from "./candle";
import { CrossHairs } from "./CrossHairs";
import LineXaxis from "./line-xaxis";
import { LimitNavigation } from "../navigation/limit-button";

const Chart = (props) => {
  const { data, width: chart_width, height: chart_height } = props;

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
  const candle_width = Math.floor((chart_width / data.length) * 0.7);

  console.log(data.time)

  const app = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Target the two specific elements we have asigned the animate class
      gsap.fromTo(
        ".animate",
        { opacity: 0 },
        {
          stagger: 0.03,
          // repeat: 1,
          duration: 0.03,
          opacity: 1,
        }
      );
    }, app); // <- Scope!

    return () => ctx.revert();
  }, [data]);

  // const [k, setK] = useState(1);
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  // useEffect(() => {
  //   const zoom = d3.zoom().on("zoom", (event) => {
  //     const { x, y, k } = event.transform;
  //     setK(k);
  //     setX(x);
  //     setY(y);
  //   });
  //   d3.select(app.current).call(zoom);
  // }, []);

  return (
    <>
      <LimitNavigation />
      <div className="sticky-div">
        <p>
          Mouse: {mouseCoords.x}, {mouseCoords.y}
        </p>
        <p>Dollars: ${dollarAt(mouseCoords.y)}</p>
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
                <LineXaxis key={i + "Line"} x={candle_x} time={data.time} />
              )}

              <Candle
                className="animate"
                key={i}
                data={bar}
                x={candle_x}
                candle_width={candle_width}
                pixelFor={pixelFor}
              />
            </>
          );
        })}

        <CrossHairs
          x={mouseCoords.x}
          y={mouseCoords.y}
          chart_dims={chart_dims}
        />

        {/* {xScale.ticks().map((tickValue) => (
          <g key={tickValue} transform={`translate(${xScale(candle_width)},0)`}>
            <line y2={chart_height} stroke="black" />
            <text
              style={{ textAnchor: "middle" }}
              dy=".71em"
              y={chart_height + 3}
            >
              {tickValue}
            </text>
          </g>
        ))} */}
      </svg>
    </>
  );
};
export default Chart;
