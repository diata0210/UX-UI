import { SIDEBAR } from "@/utils/constants/mockData"
import { Button } from "../ui/button"
import SidebarItem from "./sidebar-item"

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <div className="w-[300px] pb-[20px] h-full flex py-[4px] flex-col shadow border border-blue-500 rounded-2xl border-b-0 justify-between">

      <div className=" flex flex-col">
        <div className="w-full flex items-center justify-center">
          <img src="/logo.png" alt="logo" className="object-contain"/>
        </div>
        <div className="flex flex-col 2xl:gap-[24px] gap-[16px] pl-[40px]">
          {
            SIDEBAR.map((item, index) => ( 
              <SidebarItem key={index} icon={item.icon} name={item.name} href={item.link}/>
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