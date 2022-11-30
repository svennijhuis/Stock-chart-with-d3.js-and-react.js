import React from "react";
import classNames from "classnames";

const Candle = ({ data, x, candleWidth, pixelFor, className }) => {
  const up = data.close > data.open;
  const barTop = pixelFor(up ? data.close : data.open);
  const barBottom = pixelFor(up ? data.open : data.close);
  const barHeight = barBottom - barTop;
  const wickTop = pixelFor(data.hight);
  const wickBottom = pixelFor(data.low);

  return (
    <>
      <g className={className}>
        {/* <g name="Stock-data" x={x - candleWidth / 2} y={barTop}>
          <rect
            width="50"
            height="50"
            fill="#fff"
            x={x - candleWidth / 2}
            y={barTop}
          />
          <text
            font-family="Verdana"
            font-size="13"
            fill="#000"
            x={x - candleWidth / 2}
            y={barTop + 30}
          >
            Date: {data.time}
            Price top: {data.hight}
            Price low: {data.low}
            Price: {data.close}
          </text>
        </g> */}
        <rect
          x={x - candleWidth / 2}
          y={barTop}
          width={candleWidth}
          height={barHeight}
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
          y1={barTop}
          x2={x}
          y2={wickTop}
        />
        <line
          className={classNames({
            wick: true,
            bottom: true,
            up: up,
            down: !up,
          })}
          x1={x}
          y1={barBottom}
          x2={x}
          y2={wickBottom}
        />
      </g>
    </>
  );
};
export default Candle;
