import InfoIcon from "@/assets/icons/info";
import { BarGraph } from "@/components/ui/barGraph";

import { Tooltip } from "antd";
export default function HomePage() {
  const navigateToTask = () => {
    location.href = "/task";
  };

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        align: "left",
        labels: {
          boxWidth: 20,
        },
      },
      title: {
        display: false,
        text: "Sơ đồ biểu diễn thời gian hoàn thành task dự kiến và thực tế trong tuần qua",
        font: {
          size: 14,
        },
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
        label: "Thời gian dự kiến",
        data: labels.map(() => getRandomNumber(0, 24)),
        backgroundColor: "#4EB9EA",
      },
      {
        label: "Thời gian thực tế",
        data: labels.map(() => getRandomNumber(0, 24)),
        backgroundColor: "#116783",
      },
    ],
  };

  const handleTree = () => {
    location.href = "/tree";
  };
  return (
    <div className="flex flex-row gap-[54px] mt-[16px] w-full">
      <div className="flex flex-col gap-[20px] max-w-[697px]">
        <div className="flex flex-col gap-[10px] w-full ">
          <div className="flex flex-row gap-[8px] items-center">
            <div className="text-blue-500 text-[22px] font-medium">
              Hiệu suất làm việc
            </div>
            <Tooltip title="Tổng số giờ mà bạn đã dành cho nhiệm vụ trong khoảng thời gian một tuần gần nhất.">
              <div className="relative">
                <InfoIcon />
              </div>
            </Tooltip>
          </div>
          <div className="h-[260px] w-full flex items-center justify-center">
            <BarGraph options={options} data={data} />
          </div>
        </div>

        <div className="flex flex-row gap-[20px] justify-between items-start ">
          <div className="flex flex-col gap-[6px] w-3/5 border-solid border-[1px] border-[#def] rounded-[12px]">
            <div className="flex flex-row justify-between items-center w-full py-[10px] px-[6px]">
              <p className="text-blue-500 text-[22px] font-medium flex items-center justify-center pl-[8px]">
                Hoạt động gần đây
              </p>
              <p
                className="text-slate-700 text-[14px] font-[400] hover:text-accent-700 pr-[10px]"
                onClick={navigateToTask}
              >
                Xem tất cả
              </p>
            </div>

            <div className=" bg-white rounded-[20px] border-[#ccc] border-solid max-h-[220px] overflow-y-scroll py-[16px] px-[21px] flex flex-col gap-[20px]">
              <div className="flex flex-row justify-between items-center bg-white">
                <div className="bg-[#5E8BFF] rounded-[20px] flex flex-col items-start  pl-[27px] min-w-[200px] py-[6px]">
                  <p className="text-white text-base font-medium">
                    Học phát triển web
                  </p>
                  <p className="text-white text-sm font-normal">10 May 2024</p>
                </div>
                <div className="text-green-600 text-[20px] font-medium">
                  +1.5h
                </div>
              </div>

              <div className="flex flex-row justify-between items-center">
                <div className="bg-[#5E8BFF] rounded-[20px] flex flex-col items-start  pl-[27px] min-w-[200px] py-[6px]">
                  <p className="text-white text-base font-medium">
                    Coding ITSS
                  </p>
                  <p className="text-white text-sm font-normal">10 May 2024</p>
                </div>
                <div className="text-green-600 text-[20px] font-medium">
                  +2h
                </div>
              </div>

              <div className="flex flex-row justify-between items-center">
                <div className="bg-[#5E8BFF] rounded-[20px] flex flex-col items-start  pl-[27px] min-w-[200px] py-[6px]">
                  <p className="text-white text-base font-medium">Học UI UX</p>
                  <p className="text-white text-sm font-normal">10 May 2024</p>
                </div>
                <div className="text-green-600 text-[20px] font-medium">
                  +1.5h
                </div>
              </div>

              <div className="flex flex-row justify-between items-center">
                <div className="bg-[#5E8BFF] rounded-[20px] flex flex-col items-start  pl-[27px] min-w-[200px] py-[6px]">
                  <p className="text-white text-base font-medium">
                    Học Nihongo
                  </p>
                  <p className="text-white text-sm font-normal">10 May 2024</p>
                </div>
                <div className="text-green-600 text-[20px] font-medium">
                  +1.6h
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[23px] h-full w-2/5 border-solid border-[1px] border-[#def] rounded-[12px]">
            <div className="flex flex-row items-center justify-center gap-[8px]">
              <p
                className="text-blue-500 text-[22px] font-medium py-[10px] hover:opacity-80"
                onClick={handleTree}
              >
                Cây của tôi
              </p>
              <Tooltip title="Với mỗi cây bạn trồng được trong ứng dụng chúng tôi sẽ thay bạn trồng 1 cây ngoài đời. Vì vậy hãy cùng nhau bảo vệ môi trường nào">
                <div className="relative">
                  <InfoIcon />
                </div>
              </Tooltip>
            </div>
            <img src="/tree.png" alt="" />
          </div>
        </div>
      </div>

      <div
        className="flex flex-col gap-[14px] h-fit sticky position:[-webkit-sticky]"
        style={{
          position: "-webkit-sticky",
          top: "0",
        }}
      >
        <div className="text-blue-500 text-[22px] font-medium">
          Thống kê KPI
        </div>
        <div className="flex flex-col gap-[18px] max-w-[326px]">
          <img src="/chart_1.png" alt="chart_1" />
          <img src="/chart_2.png" alt="chart_2" />
          <img src="/chart_3.png" alt="chart_3" />
        </div>
      </div>
    </div>
  );
}
