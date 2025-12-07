import { BarChart, Bar, XAxis, YAxis, LabelList } from "recharts";

function GuessDistribution({ data }) {
  return (
    <section className="distribution flex-center">
      <h2 className="effect heading m1">Guesses Chart</h2>
      <BarChart
        style={{
          width: "99%",
          maxWidth: "600px",
          maxHeight: "300px",
          aspectRatio: 1.618,
          margin: "0 auto",
          pointerEvents: "none",
        }}
        responsive
        data={data}
        layout="vertical"
        margin={{ top: 5, right: 10 }}
      >
        <XAxis
          type="number"
          domain={[0, (dataMax) => dataMax + 2]}
          tick={false}
          axisLine={false}
        />
        <YAxis dataKey="name" type="category" interval={0} />
        <Bar dataKey="count" fill="#5bc74f" barSize={35} radius={[0, 3, 3, 0]}>
          <LabelList dataKey="count" position="right" />
        </Bar>
      </BarChart>
    </section>
  );
}

export default GuessDistribution;
