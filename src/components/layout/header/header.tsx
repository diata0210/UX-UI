import ContactIcon from "@/assets/icons/contact"
import SearchIcon from "@/assets/icons/search"
import SettingIcon from "@/assets/icons/setting"
import { Link } from "react-router-dom"
import { Button } from "../../ui/button"
import FilterTypeCalendar from "./filter-type-calendar"
type Props = {}

export default function Header({}: Props) {

  const handleAddTask = () => {
    location.href = '/new_task';
  }
  return (
    <div className="h-[100px] w-full  bg-white px-[38px] py-[19px] flex justify-between items-center shadow ">
      <div className="flex gap-[44px] items-center">
        <Button variant="submit" className="" onClick={handleAddTask}>Thêm nhiệm vụ</Button>
        <div className="2xl:text-[40px] xl:text-[34px] text-[30px] text-[#707293]">
          Tháng 6- 2024
        </div>
      </div>
      <div className="flex height-[37px] gap-[31px] items-center">
        <div className="flex gap-[22px] justify-center">
          <SearchIcon />
          <ContactIcon/>
          <Link to={'/setting'}><SettingIcon/></Link>
          <FilterTypeCalendar value="2"/>
        </div>
        <div className="">
          <img src="/avatar.png" alt="avatar" className="object-cover rounded-full"/>
          
        </div>
      </div>
    </div>
  )
}