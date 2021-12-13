// import "./styles.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "",
    uv: 300,
    pv: 100,
    amt: 800,
  },
  {
    name: "",
    uv: 200,
    pv: 250,
    amt: 698,
  },
  {
    name: "",
    uv: 300,
    pv: 180,
    amt: 950,
  },
  {
    name: "",
    uv: 180,
    pv: 350,
    amt: 789,
  },
  {
    name: "",
    uv: 290,
    pv: 120,
    amt: 690,
  },
  {
    name: "",
    uv: 290,
    pv: 450,
    amt: 890,
  },
  {
    name: "",
    uv: 400,
    pv: 250,
    amt: 790,
  },
];

export default function AdminChart() {
  return (
    <LineChart
      width={700}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 5,
        bottom: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis tickCount={11} />
      <Tooltip />
      {/* <Legend /> */}
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}
