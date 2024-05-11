import { SIDEBAR } from "@/utils/constants/mockData"
import { Button } from "../ui/button"
import SidebarItem from "./sidebar-item"

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <div className="w-[300px] h-full flex pl-[40px] py-[20px] flex-col shadow border border-blue-500 rounded-2xl border-b-0 justify-between">
      <div className="flex flex-col 2xl:gap-[26px] gap-[20px]">
        {
          SIDEBAR.map((item, index) => ( 
            <SidebarItem key={index} icon={item.icon} name={item.name}/>
          ))
        }
      </div>
      <Button variant="destructive" className="text-white flex flex-end">Đăng xuất</Button>
    </div>
  )
}