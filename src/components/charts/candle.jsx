import React from "react";
import classNames from "classnames";


const Candle = ({ data, x, candle_width, pixelFor, className }) => {
  const up = data.close > data.open;
  const bar_top = pixelFor(up ? data.close : data.open);
  const bar_bottom = pixelFor(up ? data.open : data.close);
  const bar_height = bar_bottom - bar_top;
  const wick_top = pixelFor(data.hight);
  const wick_bottom = pixelFor(data.low);

  return (
    <>
      <g className={className}>
        <rect
          x={x - candle_width / 2}
          y={bar_top}
          width={candle_width}
          height={bar_height}
          className={classNames({
            candle: true,
            up: up,
            down: !up,
          })}
        />
        <line
          className={classNames({
            wick: true,
            top: true,
            up: up,
            down: !up,
          })}
          x1={x}
          y1={bar_top}
          x2={x}
          y2={wick_top}
        />
        <line
          className={classNames({
            wick: true,
            bottom: true,
            up: up,
            down: !up,
          })}
          x1={x}
          y1={bar_bottom}
          x2={x}
          y2={wick_bottom}
        />
      </g>
    </>
  );
};
export default Candle;
