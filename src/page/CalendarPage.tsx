import AttachIcon from "@/assets/icons/attach";
import FlagIcon from "@/assets/icons/flag";
import ClockIcon from "@/assets/icons/time";
import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";
import "dayjs/locale/es";
import  { useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "./App.css";
import EVENTS from "@/utils/constants/mockData";
import { DatePicker } from "antd";
type Props = {};

dayjs.locale("vi");
const today = dayjs();

export default function CalendarPage({}: Props) {
  const localizer = dayjsLocalizer(dayjs);
  const [view, setView] = useState("month");

  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const handleClickTask = (event: any) => {
    location.href = `/edit_task/${event.id}`;
  }
  
  const components = {
    event: (props: any) => {
      if (view === "day") {
        return (
          <div
            className={`${
              props.event.status === 2 ? "bg-[#9FD0FD]" : "bg-[#FCD1D3]"
            } h-full py-[6px] rounded-[8px] w-full overflow-hidden`}
          >
            <div className="flex flex-col gap-[6px] w-full justify-between h-full overflow-y-auto px-[6px]">
              <div className="border-b-[1px] border-[#E6ECF0] flex flex-col gap-[6px] ">
                <div className="text-center text-gray-800 text-[14px] font-medium flex flex-start hover:opacity-80 cursor-pointer">
                  {props.event.title}
                </div>
                <Badge
                  variant={
                    props.event.status == "2" ? "completed" : "progressing"
                  }
                  className="w-fit"
                >
                  {props.event.status == "2"
                    ? "Đã hoàn thành"
                    : "Chưa hoàn thành"}
                </Badge>
              </div>

              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex items-center gap-[6px] flex-row">
                  <div className="flex flex-row gap-[6px] items-center">
                    <AttachIcon />
                    <div className="text-gray-800 text-sm font-medium">
                      {props.event.data.x}
                    </div>
                  </div>
                  <FlagIcon />
                  <div className="flex flex-row items-center gap-[4px]">
                    <ClockIcon />
                    <div className="text-center text-gray-800 text-xs font-bold">
                      May 16
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div
            className={`${
              props.event.status === 2 ? "text-[#0013FE]" : "text-[#FE2E00]"
            } px-[10px] text-[14px] relative`}
          >
            <span className="position top-2 mr-[4px] text-ellipsis">.</span>
            {props.event.title}
          </div>
        );
      }
    },
  };

  return (
    <div
      className="relative h-full pb-[20px]"
    >
      <DatePicker
        className="absolute"
        clearIcon={null}
        value={selectedDate}
        onChange={handleDateChange}
        defaultValue={dayjs( '07/06/2024' ,"DD-MM-YYYY")}
      />
      <Calendar
        localizer={localizer}
        events={EVENTS}
        startAccessor={"start"}
        endAccessor={"end"}
        views={["month", "day"]}
        date={selectedDate.toDate()}
        onView={(view) => setView(view)}
        toolbar={true}
        defaultView="month"
        min={dayjs(today.format("YYYY-MM-DD") + "T7:00:00").toDate()}
        max={dayjs(today.format("YYYY-MM-DD") + "T17:00:00").toDate()}
        formats={{
          dayHeaderFormat: (date) => {
            console.log(date);
            return dayjs(date).format("DD/MM/YYYY");
          },
        }}
        onDoubleClickEvent={handleClickTask}
        components={components}
        // eventPropGetter={event => {
        //   return {
        //     style: {
        //       backgroundColor: event.color
        //     }
        //   }
        // }}
      />
    </div>
  );
}
