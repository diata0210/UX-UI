import { useEffect, useState } from "react";
import { Line, Legend, LineChart as LineNN, CartesianGrid, ResponsiveContainer,Tooltip, XAxis, YAxis } from "recharts";

interface DataPoint {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

type BarChartType = {
  trigger: boolean
}

  const generateRandomData = () => {
  const newData = [];
  for (let i = 1; i <= 30; i += 2) {
    const dataPoint = {
      name: i.toString(),
    uv : Math.floor(Math.random() * 10),
    pv : Math.floor(Math.random() * 10),
    amt : Math.floor(Math.random() * 14),
    };
    newData.push(dataPoint);
  }
  return newData;
};

export default function LineChart({
  trigger
}: BarChartType) {
  const [lineData, setLineData] = useState<DataPoint[]>(generateRandomData());

  useEffect(() => {
    setLineData(generateRandomData());
  }, [trigger]);

  return (
    <ResponsiveContainer>
                        <LineNN data={lineData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="pv" stroke="#8884d8" name="Dự kiến" />
                          <Line type="monotone" dataKey="uv" stroke="#82ca9d" name="Thực tế" />
                        </LineNN>
                      </ResponsiveContainer>
  )
}