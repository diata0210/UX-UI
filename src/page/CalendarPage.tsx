import AttachIcon from "@/assets/icons/attach";
import FlagIcon from "@/assets/icons/flag";
import ClockIcon from "@/assets/icons/time";
import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";
import "dayjs/locale/es";
import React from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "./App.css";
type Props = {}

dayjs.locale("vi");
const today = dayjs();

export default function CalendarPage({ }: Props) {

  const localizer = dayjsLocalizer(dayjs);
  const [view, setView] = React.useState("month");

  const components = {
    event: (props) => {

      if (view === "week") {
        return (
          <div className={`${props.event.status === 2 ? "bg-[#FCD1D3]" : "bg-[#9FD0FD]"} h-full py-[6px] rounded-[8px]`}>
            <div className="flex flex-col gap-[10px]">
              <div className="border-b-[1px] border-[#E6ECF0] flex flex-col pl-[6px] pr-[17px] gap-[6px]">
                <div className="text-center text-gray-800 text-[14px] font-medium flex flex-start">{props.event.title}</div>
                <Badge variant="progressing">Chưa hoàn thành</Badge>
              </div>

              <div className="flex flex-row px-[6px] items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <div className="flex flex-row gap-[6px]">
                    <AttachIcon />
                    <div className="text-gray-800 text-sm font-medium">{props.event.data.x}</div>
                  </div>

                  <FlagIcon />

                  <div className="flex flex-row items-center gap-[4px]">
                    <ClockIcon />
                    <div className="text-center text-gray-800 text-xs font-bold">May 16</div>
                  </div>
                </div>

                <img src="/avatar.png" alt="avt" className="w-[16px] h-[16px]" />
              </div>
            </div>
          </div>
        )
      }

      else if (view === "day") {
        return (
          <div className={`${props.event.status === 2 ? "bg-[#FCD1D3]" : "bg-[#9FD0FD]"} h-full py-[6px] rounded-[8px] w-full`}>
            <div className="flex flex-col gap-[10px] w-full">
              <div className="border-b-[1px] border-[#E6ECF0] flex flex-col pl-[6px] pr-[17px] gap-[6px]">
                <div className="text-center text-gray-800 text-[14px] font-medium flex flex-start">{props.event.title}</div>
                <Badge variant="progressing" className="w-fit">Chưa hoàn thành</Badge>
              </div>

              <div className="flex flex-row px-[6px] items-center justify-between w-full">
                <div className="flex items-center gap-[6px] flex-row">
                  <div className="flex flex-row gap-[6px] items-center">
                    <AttachIcon />
                    <div className="text-gray-800 text-sm font-medium">{props.event.data.x}</div>
                  </div>
                  <FlagIcon />
                  <div className="flex flex-row items-center gap-[4px]">
                    <ClockIcon />
                    <div className="text-center text-gray-800 text-xs font-bold">May 16</div>
                  </div>
                </div>

                <img src="/avatar.png" alt="avt" className="w-[16px] h-[16px]" />
              </div>
            </div>
          </div>
        )
      }

      else {
        return (
          <div className={`${props.event.status === 2 ? "text-[#FE2E00]" : "text-[#0013FE]"} px-[20px] text-[14px] relative` }>
            <span className="position top-2 mr-[4px]">.</span>
            {props.event.title}
          </div>
        )
      }
    }
  }

  const events = [
    {
      start: dayjs("2024-05-16T12:00:00").toDate(),
      end: dayjs("2024-05-16T13:30:00").toDate(),
      title: "UX UI 1",
      data: {
        x: 10,
      },
      status: 2
    },
    {
      start: dayjs("2024-05-16T14:00:00").toDate(),
      end: dayjs("2024-05-16T15:30:00").toDate(),
      title: "Learn HTML/CSS",
      data: {
        x: 10,
      },
      status: 2
    },
    {
      start: dayjs("2024-05-17T12:00:00").toDate(),
      end: dayjs("2024-05-17T13:00:00").toDate(),
      title: "Nhật",
      data: {
        x: 20,
      },
      status: 1
    },
  ];


  return (
    <div
      style={{
        height: "100%",
        paddingBottom: "20px"
      }}
    >
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor={"start"}
        endAccessor={"end"}
        views={["month", "week", "day"]}
        date={dayjs(today.format('YYYY-MM-DD') + "T8:00:00").toDate()}
        onView={(view) => setView(view)}
        toolbar={true}
        defaultView="month"
        min={dayjs(today.format('YYYY-MM-DD') + "T7:00:00").toDate()}
        max={dayjs(today.format('YYYY-MM-DD') + "T17:00:00").toDate()}
        formats={{
          dayHeaderFormat: (date) => {
            console.log(date);
            return dayjs(date).format("DD/MM/YYYY");
          },
        }}
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