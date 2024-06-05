import { Button } from "@/components/ui/button";
import { LogoutOutlined } from "@ant-design/icons";
import { Dropdown, Input, MenuProps, Modal } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function AvatarDropdown() {

  const [isModal, setIsModal] = useState<Boolean>(false);

  const handleChangePassword = () => {
    setIsModal(true);
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
          <div rel="noopener noreferrer" onClick={handleChangePassword}>Thay đổi mật khẩu</div>
      ),
      key: "1",
    },
    {
      label: (
        <Link to={"/landing-page"}>
          <div style={{ color: "red" }} rel="noopener noreferrer">
            <LogoutOutlined /> Đăng xuất
          </div>
        </Link>
      ),
      key: "2",
    },
  ];

  const handleClose = () => {
    setIsModal(false);
  }

  const handleSubmit = () => {
    toast.success("Đổi mật khẩu thành công!",
      {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
    handleClose();
  }
  return (
    <>
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
      <Modal
        open={!!isModal}
        centered
        width={300}
        closeIcon={null}
        footer={
          <div className="flex flex-row items-center gap-[20px] pt-[10px]">
            <Button
              variant="destructive"
              className=" text-white"
              size="sm"
              onClick={handleClose}
            >
              Hủy
            </Button>
            <Button variant="submit" size="sm" onClick={handleSubmit}>
              Thêm
            </Button>
          </div>
        }
      >
        <div className="flex flex-col gap-[20px] w-full">
          <div className="flex flex-col w-full gap-[20px]">
            <div className="w-full text-blue-500 text-[26px] items-center justify-center flex">Đổi mật khẩu</div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[10px]">
                <div className="text-text-primary text-[16px]">Nhập mật khẩu cũ</div>
                <Input placeholder="Nhập tên KPI" type="password"/>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div className="text-text-primary text-[16px]">Nhập mật khẩu mới</div>
                <Input placeholder="Nhập mật khẩu" type="password"/>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div className="text-text-primary text-[16px]">Xác nhận mật khẩu</div>
                <Input placeholder="Xác nhận mật khẩu" type="password"/>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      
    </>
  )
}