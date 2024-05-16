import BackIcon from "@/assets/icons/back";
import BellIcon from "@/assets/icons/bell";
import DownIcon from "@/assets/icons/down";
import { TASKS } from "@/utils/constants/mockData";
import { DatePicker, DatePickerProps, Form, TimePicker } from "antd";
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

dayjs.extend(customParseFormat);

type Props = {
  id?: string;
}

const { RangePicker } = DatePicker;

type RangeValue = [Dayjs | null, Dayjs | null] | null;

export default function AddEditTaskPage({
  id
}: Props) {

  const form = useForm();

  const filteredTasks = Object.values(TASKS).flat().filter(task => task.id == id);
  const [status, setStatus] = useState('');
  const [value, setValue] = useState<RangeValue>(null);
  console.log(filteredTasks);

  const handleRadioChange = (event) => {
    setStatus(event.target.value);
    console.log(status);
  };

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };


  const disabledDate: DatePickerProps['disabledDate'] = (current, { from }) => {
    if (from) {
      return Math.abs(current.diff(from, 'days')) >= 7;
    }
    return false;
  };

  const onSubmit = (data: any) => {
    console.log("data",data);
  }

  const handleBack = () => {
    location.href = '/task';
  }
  return (
    <Form
      {...form}
    >
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={`flex flex-col ${id ? "gap-[30px]" : "gap-[54px]"}`}>
          <div className="flex flex-col gap-[39px]">
            <div className="flex flex-row gap-[27px]">
              <div onClick={handleBack}><BackIcon/></div>
              {id ?
                <p className="text-blue-500 text-4xl font-semibold">Chỉnh sửa nhiệm vụ</p> :
                <p className="text-blue-500 text-4xl font-semibold">Tạo mới nhiệm vụ</p>
              }
            </div>
            
  
            <div className="flex flex-row justify-between gap-[40px] px-[54px] items-center">
              <div className="flex flex-col gap-[27px] w-2/5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-row items-center justify-between gap-[30px]">
                        <Label className="text-gray-800 text-[20px] font-normal">Tiêu đề</Label>
                        <Input
                          defaultValue={id ? filteredTasks[0]?.name : ""}
                          className="px-[12px] w-[260px]"
                          {...field}
                        />
                      </div>
                    </FormItem>
                  )} />
  
                <FormField
                  control={form.control}
                  name="place"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-row items-center justify-between gap-[50px]">
                        <Label className="text-gray-800 text-[20px] font-normal">Địa điểm</Label>
                        <Input
                          defaultValue={id ? filteredTasks[0]?.place : ""}
                          className="px-[12px] w-[260px]"
                          {...field}
                        />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
  
              <div className="flex flex-col gap-[27px]">
                <div className="flex flex-row justify-between gap-[30px] items-center h-[42px]">
                  <Label className="text-gray-800 text-[20px] font-normal">Thời gian bắt đầu: </Label>
                  <RangePicker
                    className="h-full bg-[#FAFAFA]"
                    value={value}
                    disabledDate={disabledDate}
                    onChange={setValue}
                    style={{
                      border: '1px solid rgba(0, 0, 0, 0.40)'
                    }}
                  />
                </div>
  
                <FormField
                  control={form.control}
                  name="place"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-row justify-between gap-[30px] items-center h-[42px]">
                        <Label className="text-gray-800 text-[20px] font-normal" >Thời gian kết thúc: </Label>
                        <TimePicker.RangePicker
                          className="h-full"
                          style={{
                            border: '1px solid rgba(0, 0, 0, 0.40)'
                          }}
                          {...field}
                        />
                      </div>
                    </FormItem>
                  )}
                />
  
              </div>
            </div>
          </div>
  
          <div className="flex flex-col gap-[36.5px] px-[54px]">
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-row gap-[56px]  items-center">
                <FormField
                  control={form.control}
                  name="required"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-row gap-[18px] items-center">
                        <Input
                          className="w-[30px] rounded-full h-[30px]"
                          type="checkbox"
                          {...field}
                        />
                        <div className="text-2xl font-normal">Tính KPI</div>
                      </div>
                    </FormItem>
                  )}
                />
  
                <div className="flex flex-row gap-[13px] items-center">
                  <BellIcon />
                  <DownIcon />
                  <div className="text-gray-800 text-[24px] font-normal">Trước 30 phút</div>
                </div>
              </div>
  
              {id && <div className="flex flex-row gap-[27px]">
                <FormField
                  control={form.control}
                  name="status"
                  onChange={handleRadioChange}
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-row gap-[14px]">
                        <div className="flex flex-row gap-[14px] items-center">
                          <Input
                            type="radio"
                            value="2"
                            className="rounded-full w-[30px] h-[30px]"
                            defaultChecked={filteredTasks[0].status == "2"}
                            {...field}
                          />
                          <div className="text-xl font-normal">Đã hoàn thành</div>
                        </div>
    
                        <div className="flex flex-row gap-[14px] items-center">
                          <Input
                            type="radio"
                            value="1"
                            className="rounded-full w-[30px] h-[30px]"
                            defaultChecked={filteredTasks[0].status == "1"}
                            {...field}
                          />
                          <div className="text-xl font-normal">Chưa hoàn thành</div>
                        </div>
                      </div>
                    </FormItem>
                  )} />
  
                <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                   <FormItem>
                      <Input
                        className="w-[358px]"
                        {...field}
                        placeholder={status == "1" ? "Số % công việc hoàn thành" : "Số giờ hoàn thành công việc"}
                        defaultValue={status == "1" ? filteredTasks[0].percent_work : filteredTasks[0].time_completed}
                    />
                   </FormItem>
                  )}
                />
              </div>}
            </div>
  
            <div className={`flex flex-col ${!id ? "gap-[32px]" : "gap-[27px]"}`}>
              <Textarea className="w-full" placeholder="Ghi chú" />
              <div className="flex flex-row w-full justify-center items-center gap-[122px]">
                <Button variant="destructive" className="text-white text-2xl font-normal">Hủy</Button>
                <Button type="submit"  variant="submit" className="text-white text-2xl font-normal">Lưu thông tin</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  )
}