import BackIcon from "@/assets/icons/back";
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
import { BellOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { kpiOptions } from "@/utils/KPI";

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
  const [newKpi, setNewKpi] = useState('');
  const [options, setOptions] = useState(kpiOptions);

  const handleInputChange = (e: any) => {
    setNewKpi(e.target.value);
  };


  const disabledDate: DatePickerProps["disabledDate"] = (current, { from }) => {
    if (from) {
      return Math.abs(current.diff(from, "days")) >= 7;
    }
    return false;
  };

  const handleSubmit = () => {
    toast.success("Tạo nhiệm vụ thành công!", {
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

  const handleSubmitKPI = () => {
    if (newKpi.trim()) {
      const newOption = { label: newKpi, value: newKpi };
      setOptions([...options, newOption]);
      setNewKpi('');
    }

    toast.success("Thêm KPI thành công!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    handleClose();
  }

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

        <div className="flex flex-row justify-between xl:gap-[10px] xl:px-[54px] px-[40px] items-center">
          <div className="flex flex-col gap-[24px] w-1/2">
            <div className="flex flex-row justify-between xl:gap-[30px] gap-[20px] items-center h-[42px]">
              <Label className="text-gray-800 text-[20px] font-normal">
                Tiêu đề:
              </Label>
              <Input
                defaultValue={id ? filteredTasks[0]?.name : ""}
                placeholder="Nhập tên task"
                className="px-[12px] w-[230px] xl:w-[300px]"
              />
            </div>

            <div className="flex flex-row justify-between xl:gap-[30px] gap-[20px] items-center h-[42px]">
              <Label className="text-gray-800 text-[20px] font-normal">
                Địa điểm:
              </Label>
              <Input
                defaultValue={id ? filteredTasks[0]?.place : ""}
                placeholder="Nhập địa điểm"
                className="px-[12px] w-[230px] xl:w-[300px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[27px]">
            <div className="flex flex-row justify-start xl:gap-[30px] gap-[20px] items-center h-[42px]">
              <Label className="text-gray-800 text-[20px] font-normal">
                Ngày:
              </Label>
              <DatePicker.RangePicker
                className="xl:h-12 font-normal text-text-default h-10 bg-[#FAFAFA] w-[230px] xl:w-[300px]"
                value={value}
                disabledDate={disabledDate}
                onChange={setValue}
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.40)",
                }}
              />
            </div>

            <div className="flex flex-row justify-between xl:gap-[30px] gap-[20px] items-center h-[42px]">
              <Label className="text-gray-800 text-[20px] font-normal">
                Giờ:
              </Label>
              <TimePicker.RangePicker
                className="w-[230px] xl:w-[300px] bg-[#FAFAFA] xl:h-12 font-normal text-text-default h-10"
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
          <div className="flex gap-[20px] flex-row items-center text-gray-800 text-[20px] font-normal">
            Thêm thông báo
            <BellOutlined/>
          </div>

          {id && (
            <div className="flex flex-row gap-[27px] justify-between">
              <div className="flex gap-[20px] flex-row justify-between items-center">
                <Label className="text-gray-800 text-[20px] font-normal">Trạng thái:</Label>
                <Select className="w-[230px] xl:w-[300px]">
                  <Select.Option value="1">
                    Đã hoàn thành
                  </Select.Option>
                  <Select.Option value="2">
                    Đang tiến hành
                  </Select.Option>
                </Select>
              </div>
              <div className="flex flex-row items-center gap-[20px] justify-between">
                <Label className="text-gray-800 text-[20px] font-normal">Số giờ làm việc:</Label>
                <Input
                  className="w-[200px] xl:w-[300px]"
                  placeholder="Nhập số giờ"
                  defaultValue={
                    status == "1"
                      ? filteredTasks[0].percent_work
                      : filteredTasks[0].time_completed
                  }
                />
              </div>
            </div>
          )}

              <div className="flex flex-row justify-between xl:gap-[30px] gap-[20px] items-center h-[42px] w-1/2 relative">
                <Label className="text-gray-800 text-[20px] font-normal">KPI:</Label>
              <div className="flex flex-row items-center gap-[20px]">
              <Select
                className="w-[230px] xl:w-[300px] xl:h-12 h-10"
                defaultValue={id ? "IT" : undefined} 
                placeholder="Chọn KPI"
                options={kpiOptions}/>
                
                <PlusCircleOutlined
                  width={20}
                  height={20}
                  className="cursor-pointer text-[24px] text-primary-700 opacity-70 absolute right-[-40px]"
                  onClick={handleAddTags}
                />
              </div>
            </div>      
            <Modal
              open={!!isModal}
              centered
              width={300}
              className="pt-[30px]"
              closeIcon={null}
              footer={
                <div className="flex flex-row items-center gap-[20px] pt-[10px]">
                  <Button
                    variant="destructive"
                    className=" text-white"
                    size="sm"
                    onClick={handleClose}
                  >
                    Hủy
                  </Button>
                  <Button variant="submit" size="sm" onClick={handleSubmitKPI}>
                    Thêm
                  </Button>
                </div>
              }
              onCancel={handleClose}
            >
              <div className="flex flex-col gap-[20px]">
                <Label className="text-blue-500">Thêm KPI</Label>
              <Input
                placeholder="Nhập tên KPI"
                onChange={handleInputChange}
              />
              </div>
            </Modal>
        </div>

        <div className={`flex flex-col gap-[27px]`}>
          <Textarea
            className="w-full xl:!h-[160px] !h-[120px]"
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
