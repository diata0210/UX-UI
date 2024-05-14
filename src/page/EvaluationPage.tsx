import { useState } from "react"
import { BarGraph } from "@/components/ui/barGraph";
import { LineGraph } from "@/components/ui/lineGraph";

export default function EvaluationPage() {

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

  const handleTimeMDisplay = () => (
    setTimeDisplay('month')
  )
  const handleTimeWDisplay = () => (
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
            <div key={'week'} onClick={handleTimeWDisplay} className='w-1/2 h-full flex items-center justify-center ' style={timeDisplay === 'week' ? { background: '#F1F1F1' } : {}}>Tuần</div>
            <div key={'month'} onClick={handleTimeMDisplay} className='w-1/2 h-full flex items-center justify-center ' style={timeDisplay === 'month' ? { background: '#F1F1F1' } : {}}>Tháng</div>
          </div>
        </div>
        <div className=' w-4/5 mx-auto flex justify-center flex-col  '>
          {timeDisplay === 'week' ?
            <>
              <div className='mx-auto font-medium text-[20px] max-w-[1000px]'>Sơ đồ biểu diễn thời gian hoàn thành task dự kiến và thực tế trong tuần qua</div>
              <BarGraph options={options} data={data} />
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
