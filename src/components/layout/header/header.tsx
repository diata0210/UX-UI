import ContactIcon from "@/assets/icons/contact"
import SearchIcon from "@/assets/icons/search"
import SettingIcon from "@/assets/icons/setting"
import { Button } from "../../ui/button"
import FilterTypeCalendar from "./filter-type-calendar"

type Props = {}

export default function Header({}: Props) {
  return (
    <div className="h-[100px] w-full rounded-[15px] bg-white px-[52px] py-[19px] flex justify-between items-center shadow mb-[7px]">
      <div className="flex gap-[44px] items-center">
        <div className="w-[120px] h-[120px]">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <Button variant="submit" className="">Thêm nhiệm vụ</Button>
        <div className="text-[40px] text-[#707293]">
          Tháng 9 - 2077
        </div>
      </div>
      <div className="flex height-[37px] gap-[31px] items-center">
        <div className="flex gap-[22px] justify-center">
          <SearchIcon />
          <ContactIcon/>
          <SettingIcon/>
          <FilterTypeCalendar value="2"/>
        </div>
        <div className="h-[86px] w-[86px]">Avatar</div>
      </div>
    </div>
  )
}