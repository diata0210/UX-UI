import { BarGraph } from "@/components/ui/barGraph";
import { LineGraph } from "@/components/ui/lineGraph";
import { useState } from "react";
import {  Radio } from 'antd';

type SizeType = {};
export default function EvaluationPage() {
  const [size, setSize] = useState<SizeType>('week'); // default is 'middle'
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

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

 const labelsLine = ['1', '5', '10', '15', '20', '25', '30']

  const optionsLine = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',

      },
    },
  };

  const dataLine = {
    labels : labelsLine,
    datasets: [
      {
        label: 'Thời gian dự kiến',
        data: labelsLine.map(() => getRandomNumber(20, 100)),
        borderColor: '#9E54C8',
        backgroundColor: '#9E54C8',
      },
      {
        label: 'Thời gian thực tế',
        data: labelsLine.map(() => getRandomNumber(20, 100)),
        borderColor: '#841FF2',
        backgroundColor: '#841FF2',
      },
    ],
  };



  const [timeDisplay, setTimeDisplay] = useState('week')



  return (
    <div
      className="  setting-container flex-col flex rounded-[10px] border-2 border-[#d9d9d9] mt-[10px] min-h-[80vh] w-full "
    >
      <div className='breadcrum relative'>
        <div className='flex-grow-0 flex-shrink-0 text-[36px] font-semibold text-left text-blue-500 text-4xl font-inter '>
          Đánh giá
        </div>
      </div>
      <div className="content w-full relative  flex flex-col gap-[15px] mt-[10px]  " style={{ top: '20px' }}>
        <div>
          
            <Radio.Group value={size} onChange={(e) => {setTimeDisplay(e.target.value), setSize(e.target.value)}}>
              <Radio.Button value="week">Tuần</Radio.Button>
              <Radio.Button value="month">Tháng</Radio.Button>
            </Radio.Group>
        </div>
        <div className=' w-4/5 mx-auto flex justify-center flex-col  '>
          {timeDisplay === 'week' ?
            <>
              <div className='mx-auto font-medium text-[20px] max-w-[1000px]'>Sơ đồ biểu diễn thời gian hoàn thành task dự kiến và thực tế trong tuần qua</div>
              <BarGraph options={options} data={data}/>
            </>
            :
            <>
              <div className='mx-auto font-medium text-[20px] max-w-[1000px]'>Sơ đồ biểu diễn thời gian hoàn thành task dự kiến và thực tế trong tháng qua</div>
              <LineGraph options={optionsLine} data={dataLine}/>
            </>
          }

        </div>

      </div>
    </div>
  )
}
