import ContactIcon from "@/assets/icons/contact";
import SearchIcon from "@/assets/icons/search";
import { LogoutOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import PopupHelp from "./popup-help";

type Props = {};

export default function Header({}: Props) {

  const [popupHelp, setPopupHelp] = useState(false)
  const handlePopupHelp = () => {
    setPopupHelp(true)
  }

  const items: MenuProps["items"] = [
    {
      label: (
        <Link to={"/profile"}>
          <div rel="noopener noreferrer">Thông tin cá nhân</div>
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link to={"/profile"}>
          <div rel="noopener noreferrer">Thay đổi mật khẩu</div>
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link to={"/login"}>
          <div style={{ color: "red" }} rel="noopener noreferrer">
            <LogoutOutlined /> Đăng xuất
          </div>
        </Link>
      ),
      key: "2",
    },
  ];
  const handleAddTask = () => {
    location.href = "/new_task";
  };
  return (
    <div className="h-[100px] w-full  bg-white px-[38px] py-[19px] flex justify-between items-center shadow ">
      <div className="flex gap-[44px] items-center">
        <Button variant="submit" className="" onClick={handleAddTask}>
          Thêm nhiệm vụ
        </Button>
      </div>

      <div className="flex height-[37px] gap-[20px] items-center">
        <div className="2xl:text-[40px] xl:text-[34px] text-[30px] text-[#707293]">
          Tháng 5 - 2024
        </div>
        <div className="flex gap-[15px] justify-center">
          <SearchIcon />
          <div onClick={handlePopupHelp}>
            <ContactIcon height={40} width={40} />
          </div>
          {popupHelp && <PopupHelp setPopup={setPopupHelp}  />}
        </div>

        <div className="">
          <Dropdown menu={{ items }}>
            <a
              className="flex flex-row justify-center items-center"
              onClick={(e) => e.preventDefault()}
            >
              <img
                src="/avt.png"
                alt="avatar"
                className="object-cover rounded-full size-[60px] "
              />
              <p className="font-semibold text-2xl">Wind Bean</p>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
