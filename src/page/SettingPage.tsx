import { Button } from "@/components/ui/button";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import SettingFilter from "@/components/ui/cascaderInput";
const language = [
  {
    value: "vietnam",
    label: "Tiếng Việt",
  },
  {
    value: "english",
    label: "English",
  },
];

const fomartDate = [
  {
    value: "MM/DD/YYYY",
    label: "MM/DD/YYYY",
  },
  {
    value: "DD/MM/YYYY",
    label: "DD/MM/YYYY",
  },
];

const fomartTime = [
  {
    value: "12",
    label: "12H (AM/PM)",
  },
  {
    value: "24",
    label: "24H",
  },
];
const country = [
  {
    value: "vietnam",
    label: "Việt Nam",
  },
  {
    value: "usa",
    label: "Mỹ",
  },
];

const timezone = [
  {
    value: "+7",
    label: "(GMT+7:00) Giờ Đông Dương, TP Hồ Chí Minh",
  },
  {
    value: "+5",
    label: "(GMT+5:00) Nhật Bản, Hàn Quốc",
  },
];

const notify = [
  {
    value: "screen",
    label: "Thông báo trên màn hình",
  },
  {
    value: "mail",
    label: "Gửi qua email",
  },
];

const notifyBefore = [
  {
    value: "15",
    label: "15 Phút",
  },
  {
    value: "30",
    label: "30 Phút",
  },
];

const weekStart = [
  {
    value: "monday",
    label: "Thứ hai",
  },
  {
    value: "sunday",
    label: "Chủ Nhật",
  },
];

const holidayDisplay = [
  {
    value: "yes",
    label: "Có",
  },
  {
    value: "no",
    label: "Không",
  },
];

type Props = {};

export default function SettingPage({}: Props) {
  const handleSubmit = () => {
    toast.success("Cập nhật thành công");
  };
  const handleReset = () => {
    toast.success("Đã thiết lập lại cài đặt");
  };
  return (
    <div className="flex-col flex rounded-[10px] border-2 border-[#d9d9d9] w-full overscroll-y">
      <div className="relative mb-[20px]">
        <div className="flex-grow-0 flex-shrink-0 text-4xl font-semibold text-blue-500">
          Cài đặt
        </div>
      </div>
      <div className="w-full relative flex flex-col 2xl:gap-[80px] gap-[50px]">
        <div className=" flex flex-row gap-[40px]">
          <div className="w-1/2 flex flex-col xl:gap-[20px] gap-[10px]">
            <SettingFilter
              label="Ngôn ngữ"
              options={language}
            />
            <div className="format flex flex-row gap-[14px] w-full justify-between">
              <div className="w-1/2">
                <SettingFilter
                  label="Định dạng"
                  options={fomartDate}
                />
              </div>
              <div className="w-1/2">
                <SettingFilter
                  label="Định dạng giờ"
                  options={fomartTime}
                />
              </div>
            </div>
            <SettingFilter
              label="Quốc gia"
              options={country}
            />
            <SettingFilter
              label="Múi giờ"
              options={timezone}
            />

            <div className=" ml-[35px] mt-[16px] flex justify-center items-center h-[44px] w-1/2 border-2 border-solid rounded-[10px] bg-white border-[#0069ff] text-[14px] font-medium text-[#0069ff]">
              Thêm lịch
            </div>
          </div>

          <div className="w-1/2 flex flex-col xl:gap-[20px] gap-[10px]">
            <SettingFilter
              label="Cài đặt thông báo"
              options={notify}
            />
            <SettingFilter
              label="Thông báo trước sự kiện"
              options={notifyBefore}
            />
            <SettingFilter
              label="Bắt đầu tuần vào"
              options={weekStart}
            />
            <SettingFilter
              label="Hiển thị lịch các ngày lễ"
              options={holidayDisplay}
            />
          </div>
        </div>
        <div 
          className="flex align-center justify-around sticky bottom-[10px] position:[-webkit-sticky]"
        >
          <Button
            variant="destructive"
            onClick={handleReset}
            className="text-white "
          >
            Đặt lại mặc định
          </Button>
          <Button
            variant="submit"
            onClick={handleSubmit}
            className="text-white "
          >
            Lưu thay đổi
          </Button>
        </div>
      </div>
    </div>
  );
}
