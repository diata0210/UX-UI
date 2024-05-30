import BackIcon from "@/assets/icons/back";
import BellIcon from "@/assets/icons/bell";
import DownIcon from "@/assets/icons/down";
import { TASKS } from "@/utils/constants/mockData";
import { DatePicker, DatePickerProps, Modal, Select, TimePicker } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { toast } from "react-toastify";
import { PlusCircleOutlined } from "@ant-design/icons";

dayjs.extend(customParseFormat);

type Props = {
  id?: string;
};

type RangeValue = [Dayjs | null, Dayjs | null] | null;

export default function AddEditTaskPage({ id }: Props) {
  const filteredTasks = Object.values(TASKS)
    .flat()
    .filter((task: any) => task.id == id);
  const [status] = useState("");
  const [value, setValue] = useState<RangeValue>(null);
  const [isModal, setIsModal] = useState<Boolean>(false);
  console.log(filteredTasks);

  const disabledDate: DatePickerProps["disabledDate"] = (current, { from }) => {
    if (from) {
      return Math.abs(current.diff(from, "days")) >= 7;
    }
    return false;
  };

  const handleSubmit = () => {
    toast.success("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    location.href = "/task";
  };

  const handleBack = () => {
    location.href = "/task";
  };

  const handleAddTags = () => {
    setIsModal(true);
  };

  const handleClose = () => {
    setIsModal(false);
  };

  return (
    <div className={`flex flex-col gap-[20px]`}>
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-row gap-[27px]">
          <div onClick={handleBack}>
            <BackIcon />
          </div>
          {id ? (
            <p className="text-blue-500 text-4xl font-semibold">
              Chỉnh sửa nhiệm vụ
            </p>
          ) : (
            <p className="text-blue-500 text-4xl font-semibold">
              Tạo mới nhiệm vụ
            </p>
          )}
        </div>

        <div className="flex flex-row justify-between xl:gap-[10px] gap-[20px] xl:px-[54px] px-[40px] items-center">
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-row items-center justify-between xl:gap-[30px] gap-[20px]">
              <Label className="text-gray-800 text-[20px] font-normal">
                Tiêu đề
              </Label>
              <Input
                defaultValue={id ? filteredTasks[0]?.name : ""}
                placeholder="Nhập tên task"
                className="px-[12px] w-[180px]"
              />
            </div>

            <div className="flex flex-row items-center justify-between xl:gap-[30px] gap-[20px]">
              <Label className="text-gray-800 text-[20px] font-normal">
                Địa điểm
              </Label>
              <Input
                defaultValue={id ? filteredTasks[0]?.place : ""}
                placeholder="Nhập địa điểm"
                className="px-[12px] w-[180px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[27px]">
            <div className="flex flex-row justify-between xl:gap-[30px] gap-[12px] items-center h-[42px]">
              <Label className="text-gray-800 text-[20px] font-normal">
                Thời gian bắt đầu:{" "}
              </Label>
              <DatePicker.RangePicker
                className="h-full bg-[#FAFAFA] w-[200px]"
                value={value}
                disabledDate={disabledDate}
                onChange={setValue}
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.40)",
                }}
              />
            </div>

            <div className="flex flex-row justify-between xl:gap-[30px] gap-[12px] items-center h-[42px]">
              <Label className="text-gray-800 text-[20px] font-normal">
                Thời gian kết thúc:{" "}
              </Label>
              <TimePicker.RangePicker
                className="h-full w-[200px] bg-[#FAFAFA]"
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.40)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:gap-[37.5px] gap-[20px] xl:px-[54px] px-[40px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-row gap-[56px]  items-center">
            <div className="flex flex-row gap-[18px] items-center">
              <Input
                className="w-[26px] rounded-full h-[30px]"
                type="checkbox"
              />
              <div className="text-2xl font-normal">Tính KPI</div>
            </div>

            <div className="flex flex-row gap-[13px] items-center">
              <BellIcon />
              <DownIcon />
              <div className="text-gray-800 text-[24px] font-normal">
                Trước 30 phút
              </div>
            </div>
          </div>

          {id && (
            <div className="flex flex-row gap-[27px] justify-between">
              <div className="flex flex-row gap-[14px] justify-between">
                <div className="flex flex-row gap-[14px] items-center">
                  <Input
                    type="radio"
                    value="2"
                    name="time"
                    className="rounded-full w-[30px] h-[30px]"
                    defaultChecked={filteredTasks[0].status == "2"}
                  />
                  <div className="text-xl font-normal">Đã hoàn thành</div>
                </div>

                <div className="flex flex-row gap-[14px] items-center">
                  <Input
                    type="radio"
                    value="1"
                    name="time"
                    className="rounded-full w-[30px] h-[30px]"
                    defaultChecked={filteredTasks[0].status == "1"}
                  />
                  <div className="text-xl font-normal">Chưa hoàn thành</div>
                </div>
              </div>

              <Input
                className="w-[200px]"
                placeholder={
                  status == "1"
                    ? "Số % công việc hoàn thành"
                    : "Số giờ hoàn thành công việc"
                }
                defaultValue={
                  status == "1"
                    ? filteredTasks[0].percent_work
                    : filteredTasks[0].time_completed
                }
              />
            </div>
          )}

          <div className="flex items-center gap-[30px]">
            <Label>KPI</Label>
            <Select className="w-[200px]" defaultValue="IT">
              <Select.Option value="IT">IT</Select.Option>
              <Select.Option value="Tiếng Nhật">Tiếng Nhật</Select.Option>
            </Select>

            <PlusCircleOutlined
              width={20}
              height={20}
              className="cursor-pointer text-[24px] text-primary-700 opacity-70"
              onClick={handleAddTags}
            />
            <Modal
              open={!!isModal}
              centered
              width={300}
              className="pt-[30px]"
              closeIcon={null}
              footer={
                <div className="flex flex-row items-center gap-[20px]">
                  <Button
                    variant="destructive"
                    className=" text-white"
                    size="sm"
                  >
                    Hủy
                  </Button>
                  <Button variant="submit" size="sm">
                    Thêm
                  </Button>
                </div>
              }
              onCancel={handleClose}
            >
              <div className="flex flex-col gap-[20px]">
                <Label className="text-blue-500">Thêm KPI</Label>
                <Input />
              </div>
            </Modal>
          </div>
        </div>

        <div className={`flex flex-col gap-[27px]`}>
          <Textarea
            className="w-full xl:!h-[200px] !h-[120px]"
            placeholder="Ghi chú"
          />
          <div className="flex flex-row w-full justify-center items-center gap-[122px]">
            <Button
              onClick={handleBack}
              variant="destructive"
              className="text-white text-2xl font-normal"
            >
              Hủy
            </Button>
            <Button
              onClick={handleSubmit}
              variant="submit"
              className="text-white text-2xl font-normal"
            >
              Lưu thông tin
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
