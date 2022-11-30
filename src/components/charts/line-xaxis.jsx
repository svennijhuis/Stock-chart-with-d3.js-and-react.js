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
      <text
        x={x - 10}
        transform={`rotate(-60 ${x} 700 )`}
        style={{ textAnchor: "end", fill: "#fff" }}
        y={720}
      >
        {time}
      </text>
    </>
  );
}
