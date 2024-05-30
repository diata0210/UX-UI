import { BarGraph } from "@/components/ui/barGraph";
import { LineGraph } from "@/components/ui/lineGraph";
import { Radio, Select } from "antd";
import { useState } from "react";

type SizeType = {};
export default function EvaluationPage() {
  const [size, setSize] = useState<SizeType>("week"); // default is 'middle'
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          boxWidth: 20,
        },
      },
      title: {
        display: false,
        text: "Sơ đồ biểu diễn thời gian hoàn thành task dự kiến và thực tế trong tuần qua",
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

  const labelsLine = ["1", "5", "10", "15", "20", "25", "30"];

  const optionsLine = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const dataLine = {
    labels: labelsLine,
    datasets: [
      {
        label: "Thời gian dự kiến",
        data: labelsLine.map(() => getRandomNumber(20, 100)),
        borderColor: "#4EB9EA",
        backgroundColor: "#4EB9EA",
      },
      {
        label: "Thời gian thực tế",
        data: labelsLine.map(() => getRandomNumber(20, 100)),
        borderColor: "#116783",
        backgroundColor: "#116783",
      },
    ],
  };

  const [timeDisplay, setTimeDisplay] = useState("week");

  return (
    <div className="setting-container flex-col gap-[20px] flex rounded-[10px] border-2 border-[#d9d9d9] w-full ">
      <div className="flex-grow-0 flex-shrink-0 text-[36px] font-semibold text-left text-blue-500 text-4xl font-inter ">
        Đánh giá
      </div>
      <div className="w-full flex flex-row items-center justify-between gap-[28px]">
        <div className="w-full flex flex-col gap-[15px] mt-[10px] ">
          <div className="w-full flex flex-row items-center justify-around">
            <Select className="w-[200px] " defaultValue="Tiếng Nhật">
              <Select.Option value="Tiếng Nhật">Tiếng Nhật</Select.Option>
              <Select.Option value="IT">IT</Select.Option>
              <Select.Option value="UX-UI">UX-UI</Select.Option>
            </Select>
            <Radio.Group
              className="h-[54px]"
              value={size}
              onChange={(e) => {
                setTimeDisplay(e.target.value), setSize(e.target.value);
              }}
            >
              <Radio.Button value="week">Tuần</Radio.Button>
              <Radio.Button value="month">Tháng</Radio.Button>
            </Radio.Group>
          </div>
          <div className="w-full mx-auto flex flex-row items-center justify-around">
            {timeDisplay === "week" ? (
              <div className="flex items-center justify-around gap-[30px]">
                <img src="/KPI.png" className="w-[250px]" />
                <div className="flex flex-row">
                  <div className="bg-white p-5 rounded-xl shadow-xl">
                    <div className="flex w-full justify-center font-semibold text-[20px] text-[#3A99F1] mb-[20px]">
                      Hiệu suất làm việc
                    </div>
                    <div className="m-h-[400px] w-[600px]">
                      <BarGraph options={options} data={data} />
                    </div>

                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-row gap-[60px] items-center">
                <img src="/KPI.png" className="w-[250px]" />

                  <div className="max-w-[850px]">
                    <div className="mx-auto flex w-full justify-center font-semibold text-[20px] text-[#3A99F1] mb-[20px]">
                      Hiệu suất làm việc
                    </div>
                    <div className="m-h-[400px] w-[600px]">
                      <LineGraph options={optionsLine} data={dataLine} />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col max-w-[288px] gap-[34px]">
          <img src="/report1.png" alt="" />
          <img src="/report2.png" alt="" />
          <img src="/report2.png" alt="" />
        </div>
      </div>
    </div>
  );
}
