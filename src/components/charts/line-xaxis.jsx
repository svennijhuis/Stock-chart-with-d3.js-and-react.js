export default function LineXaxis({ x, time }) {
  return (
    <>
      <line
        y2={700}
        stroke="#fafafa"
        x1={x}
        x2={x}
        style={{ strokeWidth: 0.1 }}
      />
      <text x={x} style={{ textAnchor: "middle" }} dy=".71em" y={700}>
        {time}
      </text>
    </>
  );
}
