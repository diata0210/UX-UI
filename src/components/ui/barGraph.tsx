import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

interface BarGraphProps {
  options: any;
  data: any;
}

const BarGraph: React.FC<BarGraphProps> = ({ options, data }) => {
  return (
      <Bar options={options} data={data} />
  );
}

export  { BarGraph };