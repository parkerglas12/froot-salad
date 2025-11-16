import { BarChart, Bar, XAxis, YAxis, LabelList } from "recharts";

function GuessDistribution({ data }) {
  return (
    <section className="distribution flex-center">
      <h2 className="effect heading m1">Guess Distribution</h2>
      <BarChart
        style={{
          width: "85%",
          maxWidth: "600px",
          maxHeight: "400px",
          aspectRatio: 2,
          margin: "0 auto",
          pointerEvents: "none",
        }}
        responsive
        data={data}
        layout="vertical"
      >
        <XAxis
          type="number"
          domain={[0, (dataMax) => dataMax + 2]}
          tick={false}
          axisLine={false}
        />
        <YAxis dataKey="name" type="category" interval={0} />
        <Bar dataKey="count" fill="#64df59">
          <LabelList dataKey="count" position="right" />
        </Bar>
      </BarChart>
    </section>
  );
}

export default GuessDistribution;
