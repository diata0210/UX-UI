import { useEffect, useState } from "react";
import { Bar, Legend, BarChart as Barrr, CartesianGrid, ResponsiveContainer,Tooltip, XAxis, YAxis } from "recharts";

const generateRandomDataInWeek = () => {
  const barData = [];
  for (let i = 0; i < 7; i++) {
    const uv = Math.floor(Math.random() * 10); 
    const pv = Math.floor(Math.random() * 10); 
    const amt = Math.floor(Math.random() * 12); 
    const dayName = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'][i];

    const dataPoint = {
      name: dayName,
      uv: uv,
      pv: pv,
      amt: amt
    };
    barData.push(dataPoint);
    }
  return barData;
}

interface DataPoint {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

type BarChartType = {
  trigger: boolean
}
export default function BarChart({
  trigger
}: BarChartType) {
    const [barData, setBarData] = useState<DataPoint[]>(generateRandomDataInWeek());

  useEffect(() => {
    setBarData(generateRandomDataInWeek());
  }, [trigger]);

  return (
    <ResponsiveContainer>
  <Barrr data={barData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="pv" fill="#8884d8" name="Dự kiến" />
    <Bar dataKey="uv" fill="#82ca9d" name="Thực tế" />
  </Barrr>
</ResponsiveContainer>
  )
}