import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { log } from 'console';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: false,
      text: 'Sơ đồ biểu diễn thời gian hoàn thành task dự kiến và thực tế trong tuần qua',
    },
  },
};

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const data = {
  labels,
  datasets: [
    {
      label: 'Thời gian dự kiến',
      data: labels.map(() => getRandomNumber(0, 24)),
      backgroundColor: '#9E54C8',
    },
    {
      label: 'Thời gian thực tế',
      data: labels.map(() => getRandomNumber(0, 24)),
      backgroundColor: '#841FF2',
    },
  ],
};

export default function EvaluationPage() {
  const [timeDisplay, setTimeDisplay] = useState('week')
  
  const handleTimeMDisplay = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => (
    setTimeDisplay('month')
  )
  const handleTimeWDisplay = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => (
    setTimeDisplay('week')
  )
  

  return (
    <div
      className="  setting-container flex-col flex rounded-[10px] border-2 border-[#d9d9d9] mt-[10px] min-h-[80vh] w-full "
    >
      <div className='breadcrum relative'>
        <div className='flex-grow-0 flex-shrink-0 text-[36px] font-semibold text-left text-[#4677d4] '>
          Đánh giá
        </div>
      </div>
      <div className="content w-full relative  flex flex-col gap-[15px] mt-[10px] ">
        <div>
          <div className='flex flex-row items-center overflow-hidden  w-[180px] h-[40px] rounded-[10px] bg-white  border-2 border-solid border-black'>
            <div key={'week'} onClick={handleTimeWDisplay} className='w-1/2 h-full flex items-center justify-center ' style={timeDisplay === 'week' ?  { background: '#F1F1F1'} : {} }>Tuần</div>
            <div key={'month'} onClick={handleTimeMDisplay} className='w-1/2 h-full flex items-center justify-center ' style={timeDisplay === 'month' ?  { background: '#F1F1F1'} : {} }>Tháng</div>
          </div>
        </div>
        <div className=' w-4/5 mx-auto flex justify-center flex-col  '>
          {timeDisplay === 'week' ? 
          <><div className='mx-auto font-medium text-[20px]'>Sơ đồ biểu diễn thời gian hoàn thành task dự kiến và thực tế trong tuần qua</div>
          <Bar style={{fontSize: '14px'}} options={options} data={data} /></>
          : 
          <><div className='mx-auto font-medium text-[20px]'>Sơ đồ biểu diễn thời gian hoàn thành task dự kiến và thực tế trong tháng qua</div>
          <Bar style={{fontSize: '14px'}} options={options} data={data} /></>
        }
          
        </div>
        
      </div>
    </div>
  )
}
