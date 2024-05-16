import { BarGraph } from "@/components/ui/barGraph";

export default function HomePage() {

  const navigateToTask = () => {
    location.href = '/new_task'
  };

  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        align: "left",
        labels: {
          boxWidth: 10,
        }
      },
      title: {
        display: false,
        text: 'Sơ đồ biểu diễn thời gian hoàn thành task dự kiến và thực tế trong tuần qua',
        font: {
          size: 14
        }
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


  }
  return (
    <div className="flex flex-row gap-[54px] mt-[16px] w-full">
      <div className="flex flex-col gap-[20px] max-w-[697px]">
        <div className="flex flex-col gap-[10px] w-full ">
          <div className="flex flex-row items-start justify-between">
            <div className=" text-gray-800 text-[22px] font-medium">Số giờ làm việc tuần vừa qua</div>
          </div>
            <div className="h-[260px] w-full flex items-center justify-center">
              <BarGraph options={options} data={data} />
              </div>
        </div>

        <div className="flex flex-row gap-[27px] justify-between items-center">
          <div className="flex flex-col gap-[12px] w-3/5 shadow-lg rounded-[20px]">
            <div className="flex flex-row justify-between items-center w-full">
              <p className="text-slate-700 text-[22px] font-medium">Hoạt động gần đây</p>
              <p className="text-slate-700 text-[18px] font-[400] hover:text-accent-700" onClick={navigateToTask}>Xem tất cả</p>
            </div>

            <div className=" bg-white rounded-[20px] shadow max-h-[228px] overflow-y-scroll py-[16px] px-[21px] flex flex-col gap-[24px]">
              <div className="flex flex-row justify-between items-center bg-white">
                <div className="bg-[#5E8BFF] rounded-[20px] flex flex-col items-start  pl-[27px] min-w-[240px] py-[6px]">
                  <p className="text-white text-base font-medium">Học phát triển web</p>
                  <p className="text-white text-sm font-normal">10 May 2024</p>
                </div>
                <div className="text-green-600 text-[22px] font-medium">+1.5h</div>
              </div>

              <div className="flex flex-row justify-between items-center">
                <div className="bg-[#5E8BFF] rounded-[20px] flex flex-col items-start  pl-[27px] min-w-[240px] py-[6px]">
                  <p className="text-white text-base font-medium">Coding programming.ai</p>
                  <p className="text-white text-sm font-normal">10 May 2024</p>
                </div>
                <div className="text-green-600 text-[22px] font-medium">+2h</div>
              </div>

              <div className="flex flex-row justify-between items-center">
                <div className="bg-[#5E8BFF] rounded-[20px] flex flex-col items-start  pl-[27px] min-w-[240px] py-[6px]">
                  <p className="text-white text-base font-medium">Học UI UX</p>
                  <p className="text-white text-sm font-normal">10 May 2024</p>
                </div>
                <div className="text-green-600 text-[22px] font-medium">+1.5h</div>
              </div>

              <div className="flex flex-row justify-between items-center">
                <div className="bg-[#5E8BFF] rounded-[20px] flex flex-col items-start  pl-[27px] min-w-[240px] py-[6px]">
                  <p className="text-white text-base font-medium">Học Nihongo</p>
                  <p className="text-white text-sm font-normal">10 May 2024</p>
                </div>
                <div className="text-green-600 text-[22px] font-medium">+1.6h</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[23px] w-2/5">
            <p className="text-gray-800 text-[22px] font-medium ">Cây của tôi</p>
            <img src='/tree.png' alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[14px]">
        <div className="text-gray-800 text-[22px] font-medium">
          Thống kê KPI
        </div>
        <div className="flex flex-col gap-[18px] max-w-[326px]">
          <img src="/chart_1.png" alt="chart_1" />
          <img src="/chart_2.png" alt="chart_2" />
          <img src="/chart_3.png" alt="chart_3" />
        </div>
      </div>
    </div>
  )
}