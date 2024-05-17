import AttachIcon from "@/assets/icons/attach";
import FlagIcon from "@/assets/icons/flag";
import LocationIcon from "@/assets/icons/location";
import ClockIcon from "@/assets/icons/time";
import { Badge } from "../ui/badge";

type Props = {
  name: string;
  status: string;
  date: string;
  time: string;
  place: string;
  required?: boolean;
  number_file?: number;
};

export default function TaskItem({
  name,
  status,
  date,
  time,
  place,
  required = true,
  number_file = 0,
}: Props) {
  return (
    <div
      className={`px-[22px] pt-[13px] pb-[8px] rounded-[15px] w-[288px] h-[146px] ${
        status == "1" ? "bg-[#FCD1D3]" : "bg-[#9FD0FD]"
      }`}
    >
      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-row justify-between items-center">
          <span className="text-xl font-medium ">{name}</span>
          <span className="text-base font-bold">{date}</span>
        </div>
        <div>
          <Badge variant={status == "1" ? "progressing" : "completed"}>
            <span className="text-sm">
              {" "}
              {status == "1" ? "Chưa hoàn thành" : "Đã hoàn thành"}
            </span>
          </Badge>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-1 justify-between items-center">
            <ClockIcon />
            <span className="text-base font-medium">{time}</span>
          </div>

          <div className="flex flex-row items-center gap-[4px]">
            <LocationIcon />
            <span className="text-base font-medium">{place}</span>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center ">
          <div className="w-[45px] flex flex-row justify-around items-center bg-[#9fd0fd] rounded-sm shadow "
            style={{ boxShadow: "0px 0.5069931149482727px 4px 0 rgba(0,0,0,0.15)" }}
          >
            
            <span className="text-base font-medium  flex flex row items-center ">
              <AttachIcon />
              {number_file}
            </span>
            {required && <FlagIcon width="16" height="16" />}
          </div>
          <img
            src="avt.png"
            alt="avt"
            className="w-[30px] h-[30px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
