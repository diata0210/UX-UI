import BackIcon from "@/assets/icons/back";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {CloseCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface InputProps {
  label: string;
  defaultValue: string;
}
type Props = {};
const InputProfile = ({ label, defaultValue }: InputProps) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <Label className="text-gray-800 text-[20px] font-normal">{label}</Label>
      <Input defaultValue={defaultValue} className="w-[280px] xl:w-[360px]" />
    </div>
  );
};

type AccountOptionProps = {
  src: string;
  alt: string;
  text: string;
};

const AccountOption: React.FC<AccountOptionProps> = ({ src, alt, text }) => (
  <div className="cursor-pointer flex items-center gap-3 py-[10px] px-[20px] text-center whitespace-nowrap bg-white border border-solid shadow-sm border-zinc-300 w-[300px] rounded-lg">
    <img loading="lazy" src={src} alt={alt} className=" w-[26px]" />
    <div className="">{text}</div>
  </div>
);

export default function Profile({}: Props) {
  const accountOptions = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2850bc7d0dd698d06bc296ede35c5bb644408a66a110899dbd4af76eb676e16?apiKey=f19a917c094b4f6fa8172f34eb76d09c&",
      alt: "Google Logo",
      text: "Google",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d89791b8491f51a7ed8c57ed483e22991813a32b66f3517113602278e5573f53?apiKey=f19a917c094b4f6fa8172f34eb76d09c&",
      alt: "Jira Logo",
      text: "Jira",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f52e4e3e0dc113ace92f8d2342203273b0fd095ddce1a917ec609d5a72e1fe01?apiKey=f19a917c094b4f6fa8172f34eb76d09c&",
      alt: "Slack Logo",
      text: "Slack",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/21c3f259ea89f2d3de83a6b52984b9a64c383c484eaafa97b9122ca3a47ee078?apiKey=f19a917c094b4f6fa8172f34eb76d09c&",
      alt: "Microsoft 365 Logo",
      text: "Microsoft 365",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bce8ae8cd65fc28bff42df7f2a3d10a2dd1346e7ebeb4afa557bf40ae6ffc6ee?apiKey=f19a917c094b4f6fa8172f34eb76d09c&",
      alt: "X Logo",
      text: "X",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9668f822d2a9a48f98ac6032765d26976dae5edcf0441ad00358a3941d1bfa17?apiKey=f19a917c094b4f6fa8172f34eb76d09c&",
      alt: "Telegram Logo",
      text: "Telegram",
    },
  ];

  const navigate = useNavigate();
  const [selected, setSelected] = useState("op1");
  const [popup, setPopup] = useState(false);
  const handleBackPopup = () => {
    setPopup(false);
  };
  const handleOp1 = () => {
    setSelected("op1");
  };
  const handleOp2 = () => {
    setSelected("op2");
  };
  const handleCancel = () => {
    toast.error("Đã hủy bỏ thay đổi", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleSubmit = () => {
    toast.success("Đã lưu thay đổi",{
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleLink = () => {
    setPopup(true);
  };
  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-row gap-[10px] items-center">
            <div onClick={handleBack} >
              <BackIcon width="26" height="26"/>
            </div>
            <p className="text-blue-500 text-4xl font-semibold">
              Thiết lập tài khoản
            </p>
          </div> 
          <div className="flex flex-col w-full 2xl:gap-[50px] gap-[30px]">
            <div className="w-full flex flex-row border-b-2 border-solid border-[#82ccf1]">
              <div
                onClick={handleOp1}
                className={`text-[20px] flex justify-center w-[200px] ${
                  selected === "op1"
                    ? "text-[#1D2D35] border-b-4 border-solid border-[#307ba7]"
                    : ""
                }`}
              >
                Thông tin tài khoản
              </div>
              <div
                onClick={handleOp2}
                className={`text-[20px] flex justify-center w-[270px] ${
                  selected === "op2"
                    ? "text-black border-b-4 border-solid border-[#5263FF]"
                    : ""
                }`}
              >
                Những tài khoản đã liên kết
              </div>
            </div>
              {selected === "op1" ? (
                <div className="flex w-full flex-row gap-[30px] xl:gap-[50px] items-start justify-between">
                  <div className="w-1/5 xl:x-1/4 flex flex-col justify-center items-center">
                    <div className="mt-[62px]">
                      <img src="/avt.png" alt="avatar nè" />
                    </div>
                    <div
                      className="w-[100px] h-[22px] rounded-[15px] bg-white/40 flex justify-center"
                      style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
                    >
                      Tải ảnh lên
                    </div>
                  </div>

                  <div className="flex flex-col gap-[31px] w-3/4 xl:x-2/3">
                    <div className="flex flex-row w-full gap-[70px]  justify-between">
                      <InputProfile
                        label="Email"
                        defaultValue="test@gmail.com"
                      />
                      <InputProfile
                        label="Tên đăng nhập"
                        defaultValue="windbeandz"
                      />
                    </div>
                    <div className="flex flex-row w-full gap-[70px] justify-between">
                      <InputProfile
                        label="Mục tiêu làm việc"
                        defaultValue="60"
                      />
                      <InputProfile
                        label="Nghề nghiệp"
                        defaultValue="Giáo viên"
                      />
                    </div>
                    <div className="flex flex-row gap-[70px] justify-between">
                      <InputProfile label="Quốc gia" defaultValue="Việt Nam" />
                      <InputProfile label="Thành phố" defaultValue="Hà Nội" />
                    </div>
                    <div className="flex xl:mt-[30px] align-center justify-around">
                      <Button
                        onClick={handleCancel}
                        variant="destructive"
                        className="text-white"
                      >
                        Hủy
                      </Button>
                      <Button
                        onClick={handleSubmit}
                        variant="submit"
                        className="text-white"
                      >
                        Lưu thay đổi
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="justify-between flex flex-col gap-[30px] xl:gap-[0px] w-full">
                  <div className="flex px-[20px] py-[20px] flex-col rounded-[20px] bg-white border-solid border-2 border-[#ccc] gap-[10px]">
                    <div className="text-3xl text-left text-[#1d2d35]">
                      Google
                    </div>
                    <div className="text-[22px]">
                      Tài khoản của bạn{" "}
                      <p className="inline text-[#fb4949]">
                        nguyenvana@gmail.com
                      </p>{" "}
                      đã được liên kết với Tracking KPI
                    </div>
                    <div
                      className="w-fit px-[10px] bg-[#fb6668] rounded-[10px] h-10 text-2xl text-center text-white flex items-center justify-center"
                      style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
                    >
                      Hủy liên kết tài khoản này
                    </div>
                  </div>
                  <Button
                    onClick={handleLink}
                    variant="submit"
                    className="text-white self-end fixed bottom-[20px] text-[24px] h-[40px] font-medium gap-2.5 p-2.5 w-fit px-[20px]"
                  >
                    Liên kết các tài khoản khác
                  </Button>
                  {popup && (
                    <>
                      <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="flex flex-col items-end py-[20px] px-[20px] text-lg font-medium #1D2D35 bg-white rounded-[20px] shadow-sm max-w-[536px] max-md:px-5">
                          <div className="flex gap-5 items-center mb-[20px] self-start text-3xl font-bold">
                            <CloseCircleOutlined 
                              className="text-[20px] "
                              onClick={handleBackPopup}
                            />
                            <div className="flex-auto font-[600]">
                              Chọn tài khoản
                            </div>
                          </div>

                          <div className="flex flex-col gap-[20px]">
                            {accountOptions.map((option, index) => (
                              <AccountOption
                                key={index}
                                src={option.src}
                                alt={option.alt}
                                text={option.text}
                              />
                            ))}
                          </div>
                        </div>
                      </section>
                    </>
                  )}
                </div>
              )}
            </div>
        </div>
      </div>
    </>
  );
}
