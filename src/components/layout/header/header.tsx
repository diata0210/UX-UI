import ContactIcon from "@/assets/icons/contact";
import SearchIcon from "@/assets/icons/search";
import { DatePicker, Dropdown, Modal } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import PopupHelp from "./popup-help";
import AvatarDropdown from "./avatar-dropdown";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";



export default function Header() {

  const [modal, setModal] = useState(false);
  const handleAddKPI = () => {
    setModal(true);
  };
  
  const items = [
  {
    label: (
      <Link to={"/new_task"} >
        <div rel="noopener noreferrer">Thêm nhiệm vụ</div>
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <div onClick={handleAddKPI}>
        <div rel="noopener noreferrer">Thêm KPI</div>
      </div>
    ),
    key: "1",
  },
];

  
  const [popupHelp, setPopupHelp] = useState(false);
  const handlePopupHelp = () => {
    setPopupHelp(true);
  };
  
  return (
    <div className="h-[100px] w-full bg-white px-[38px] py-[19px] flex justify-between items-center">
      <div className="flex gap-[44px] items-center">
        <Dropdown menu={{ items }}>
          <Button variant="submit" className="">
            Thêm mới
          </Button>
        </Dropdown>
        <Modal
            open={!!modal}
            centered
            width={300}
            className="pt-[30px]"
            closeIcon={null}
            footer={
              <div className="flex flex-row items-center gap-[20px] pt-[10px]">
                <Button
                  variant="destructive"
                  className=" text-white"
                  size="sm"
                  onClick={() => setModal(false)}
                >
                  Hủy
                </Button>
                <Button variant="submit" size="sm">
                  Thêm
                </Button>
              </div>
            }
            onCancel={() => setModal(false)}
          >
            <div className="flex flex-col gap-[20px]">
              <Label className="text-blue-500">Thêm KPI</Label>
              <Input placeholder="Nhập tên KPI"/>
            </div>
          </Modal>
      </div>

      <div className="flex height-[37px] gap-[20px] items-center">
        <div className="2xl:text-[40px] xl:text-[34px] text-[30px] text-[#707293]" >

          <DatePicker>
          Tháng 6 - 2024
            </DatePicker>
        </div>
        <div className="flex gap-[15px] justify-center items-center">
          <SearchIcon />
          <div onClick={handlePopupHelp}>
            <ContactIcon height={40} width={40} />
          </div>
          {popupHelp && <div className="x-[1000]"><PopupHelp setPopup={setPopupHelp} /></div>}
        </div>

        <div className="">
          <AvatarDropdown/>
        </div>
      </div>
    </div>
  );
}
