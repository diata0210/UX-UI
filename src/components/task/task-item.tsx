import AttachIcon from "@/assets/icons/attach";
import FlagIcon from "@/assets/icons/flag";
import LocationIcon from "@/assets/icons/location";
import { Clock } from "lucide-react";
import { Badge } from "../ui/badge";

type Props = {
  name: string;
  status: string;
  date: string;
  time: string;
  place: string;
  required?: boolean;
  number_file?: number;

}

export default function TaskItem({
  name,
  status,
  date,
  time,
  place,
  required = true,
  number_file = 0
}: Props) {
  return (
    <div className={`px-[22px] py-[16px] rounded-[15px] w-[228px] ${status == '1' ? 'bg-[#FCD1D3]' : 'bg-[#9FD0FD]'}`}>
      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-row justify-between items-center">
          <span className="text-xl font-medium ">{name}</span>
          <span className="text-base font-bold">{date}</span>
        </div>
        <div>
          <Badge variant={status == "1" ? "progressing" : "completed"}>
           <span className="text-sm"> {status == '1' ? "Chưa hoàn thành" : "Đã hoàn thành"}</span>
          </Badge>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-1">
            <Clock />
            <span className="text-base font-medium">{time}</span>
          </div>

          <div className="flex flex-row items-center gap-[4px]">
            <LocationIcon />
            <span className="text-base font-medium">{place}</span>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center ">
          <div className="w-[58px] flex flex-row items-center bg-rose-200 rounded-sm shadow ">
            <AttachIcon />
            <span className="text-base font-medium">{number_file}</span>
            {required && <FlagIcon width="16" height="16"/>}
          </div>
          <img src='avatar.png' alt="avt" className="w-[30px] h-[30px]" />
        </div>
      </div>
    </div>
  )
}