import InfoIcon from "@/assets/icons/info";
import { BarGraph } from "@/components/ui/barGraph";
import { LineGraph } from "@/components/ui/lineGraph";
import { Button, Checkbox, Modal, Radio, Select } from "antd";
import { useState } from "react";

type SizeType = {};
export default function EvaluationPage() {
  const [size, setSize] = useState<SizeType>("week"); // default is 'middle'
  const [isModal, setIsModal] = useState<Boolean>(false);
  const [isModalDetail, setIsModalDetail] = useState<Boolean>(false);
  const [KPI, setKPI] = useState("Tiếng Nhật");

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

  const handleOpenModal = () => {
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setIsModal(false);
    setIsModalDetail(false);
  };

  const handleDetailModal = () => {
    setIsModalDetail(true);
  };

  const [timeDisplay, setTimeDisplay] = useState("week");

  const handleChangeKPI = (value: any) => {
    setKPI(value);
  }

  return (
    <div className="setting-container flex-col gap-[20px] flex rounded-[10px] border-2 border-[#d9d9d9] w-full ">
      <div className="flex-grow-0 flex-shrink-0 text-left text-4xl font-semibold text-primary-600 ">
        Đánh giá
      </div>
      <div className="flex flex-row items-start justify-between pt-0 mt-0 w-full">
        <div className="w-2/3 xl:w-3/4 flex flex-col xl:pr-0 2xl:gap-[60px] xl:gap-[40px] gap-[20px]">
          <div className="w-full flex flex-row items-center justify-between">
            <Select className="w-[200px] " defaultValue={KPI} onChange={handleChangeKPI}>
              <Select.Option value="Tiếng Nhật">Tiếng Nhật</Select.Option>
              <Select.Option value="IT">IT</Select.Option>
              <Select.Option value="UX-UI">UX-UI</Select.Option>
            </Select>
            <Radio.Group
              value={size}
              onChange={(e) => {
                setTimeDisplay(e.target.value), setSize(e.target.value);
              }}
            >
              <Radio.Button value="week">Tuần</Radio.Button>
              <Radio.Button value="month">Tháng</Radio.Button>
            </Radio.Group>
          </div>
          <div className="w-full flex flex-row items-center justify-between">
            {timeDisplay === "week" ? (
              <div className="flex items-start justify-start gap-[30px] w-full">
                <div className="flex flex-col gap-[30px] justify-center items-center xl:w-1/4 w-1/5">
                  <div className="flex flex-row items-center gap-3">
                    <div className="font-medium text-[20px] text-[#3A99F1]">
                      KPI
                    </div>
                    <div>
                      <InfoIcon width="20" height="20" />
                    </div>
                  </div>
                  <img
                    src="/KPI.png"
                    className="img-kpi xl:!w-[200px]"
                    onClick={handleDetailModal}
                  />
                  <Button
                    className="bg-primary-600 mt-[10px] h-[32px] xl:w-[120px] text-white"
                    onClick={handleOpenModal}
                  >
                    Đánh giá
                  </Button>
                </div>
                <div className="flex flex-row flex-1 xl:gap-[60px] gap-[30px] items-center xl:max-w-[3/4] w-4/5">
                  <div className="w-full">
                    <div className="flex w-full justify-center font-medium text-[20px] text-[#3A99F1] mb-[20px]">
                      Hiệu suất làm việc
                    </div>
                    <BarGraph options={options} data={data} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-start gap-[30px] w-full">
                <div className="flex flex-col gap-[30px] justify-center items-center xl:w-1/4 w-1/5">
                  <div className="flex flex-row items-center gap-3">
                    <div className="font-medium text-[20px] text-[#3A99F1]">
                      KPI
                    </div>
                    <div>
                      <InfoIcon width="20" height="20" />
                    </div>
                  </div>
                  <img src="/KPI.png" className="img-kpi xl:!w-[200px]" />
                  <Button
                    className="bg-primary-600 mt-[10px] h-[32px] xl:w-[120px] text-white"
                    onClick={handleOpenModal}
                  >
                    Đánh giá
                  </Button>
                </div>
                <div className="flex flex-row flex-1 xl:gap-[60px] gap-[30px] items-center xl:max-w-[3/4] w-4/5">
                  <div className="w-full">
                    <div className="flex w-full justify-center font-medium text-[20px] text-[#3A99F1] mb-[20px]">
                      Hiệu suất làm việc
                    </div>
                    <LineGraph options={optionsLine} data={dataLine} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col w-1/4 xl:w-1/5 gap-[12px] items-center justify-center border-[1px] border-[#ccc] border-solid rounded-[12px]">
          <div className="text-[20px] text-[#3A99F1]">Thông tin chi tiết</div>
          <div className="flex flex-col  gap-[10px] px-[10px] py-[20px]">
            <div className="flex flex-row justify-between">
              <div>Tổng số tasks: </div>
              <div>40</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>Số task hoàn thành: </div>
              <div>20</div>
            </div>

            <div className="flex flex-row justify-between">
              <div>Thời gian dự kiến:</div>
              <div>60</div>
            </div>

            <div className="flex flex-row justify-between">
              <div>Thời gian thực tế:</div>
              <div>40</div>
            </div>

            <div className="flex flex-row justify-between">
              <div>Task có hiệu suất tốt nhất: </div>
              <div>Từ vựng N2</div>
            </div>

            <div className="flex flex-row justify-between">
              <div className="">Task muộn nhất: </div>
              <div>Đọc N2</div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={!!isModal}
        width={300}
        footer={null}
        centered
        onCancel={handleCloseModal}
        className="bg-[#ccc] rounded-2xl"
      >
        <div className="flex items-center justify-center flex-col gap-[12px] mt-[20px]">
          <img src="/report1.png" />
          <img src="/report2.png" />
          <img src="/report2.png" />
        </div>
      </Modal>

      <Modal
        open={!!isModalDetail}
        width={300}
        footer={null}
        centered
        onCancel={handleCloseModal}
      >
        <div className="flex flex-col">
          <div className="flex flex-col gap-[4px]">
            <div className="flex justify-between">
              <div className="">Nhiệm vụ</div>
              <div>Icon</div>
            </div>

            <div>Hôm nay</div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-2">
              <div>
                <Checkbox />
              </div>
              <div>Học từ vựng 800 - 850 </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
