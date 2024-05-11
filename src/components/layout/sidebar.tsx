import { SIDEBAR } from "@/utils/constants/mockData"
import { Button } from "../ui/button"
import SidebarItem from "./sidebar-item"

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <div className="w-[300px] h-full flex py-[20px] flex-col shadow border border-blue-500 rounded-2xl border-b-0 justify-between">

      <div className=" flex flex-col">
        <div className="w-full flex items-center justify-center">
          <img src="/logo.png" alt="logo" className="object-contain"/>
        </div>
        <div className="flex flex-col 2xl:gap-[26px] gap-[20px] pl-[40px]">
          {
            SIDEBAR.map((item, index) => ( 
              <SidebarItem key={index} icon={item.icon} name={item.name}/>
            ))
          }
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button variant="destructive" className="text-white ">Đăng xuất</Button>
      </div>
    </div>
  )
}