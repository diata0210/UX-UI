﻿import InfoIcon from "@/assets/icons/info";
import { Modal, Radio, Select, Tooltip as ITooltip, Tooltip, Flex, Progress } from "antd";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { WarningIcon } from "@/assets/icons/warning";
import { CloseOutlined } from "@ant-design/icons";
import LineChart from "@/components/ui/charts/line-chart";
import BarChart from "@/components/ui/charts/bar-chart";
import { Button } from "@/components/ui/button";

type SizeType = {};

export default function EvaluationPage() {
  const word = "...";
  const [size, setSize] = useState<SizeType>("week"); // default is 'middle'
  const [isModal, setIsModal] = useState<Boolean>(false);
  const [isModalDetail, setIsModalDetail] = useState<Boolean>(false);
  const [KPI, setKPI] = useState("Tiếng Nhật");
  const [isLoading, setIsLoading] = useState(true);
  const [ trigger, setTrigger ] = useState(false);

  const handleChangeKPI = (value: any) => {
    setKPI(value);
    setTrigger((trigger) => !trigger);
  };

  useEffect(() => {
    let timer: any;
    if (isModal) {
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); 
    }

    return () => clearTimeout(timer);
  }, [isModal]);

  const handleOpenModal = () => {
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setIsModal(false);
    setIsModalDetail(false);
  };

  const handleDetailModal = () => {
    setIsModalDetail(true);
  };

  const [timeDisplay, setTimeDisplay] = useState("week");

  return (
    <div className="setting-container flex-col gap-[20px] flex rounded-[10px] border-2 border-[#d9d9d9] w-full ">
      <div className="flex-grow-0 flex-shrink-0 text-left text-4xl font-semibold text-primary-600 ">
        Đánh giá
      </div>
      <div className="flex flex-row items-start justify-between pt-0 mt-0 w-full">
        <div className=" flex flex-col xl:pr-0 2xl:gap-[60px] xl:gap-[40px] gap-[20px] w-full">
          <div className="w-full flex flex-row items-center justify-between">
            <Select className="w-[200px] " defaultValue={KPI} onChange={handleChangeKPI}>
              <Select.Option value="Tiếng Nhật">Tiếng Nhật</Select.Option>
              <Select.Option value="IT">IT</Select.Option>
              <Select.Option value="UX-UI">UX-UI</Select.Option>
            </Select>
            <Radio.Group
              value={size}
              onChange={(e) => {
                setTimeDisplay(e.target.value), setSize(e.target.value);
              }}
            >
              <Radio.Button value="week">Tuần</Radio.Button>
              <Radio.Button value="month">Tháng</Radio.Button>
            </Radio.Group>
          </div>
          <div className="w-full flex flex-row items-center justify-between">
            {timeDisplay === "week" ? (
              <div className="flex items-start justify-between gap-[30px] w-full">
                <div className="flex flex-col gap-[30px] justify-center items-center">
                  <div className="flex flex-row items-center gap-3">
                    <div className="font-medium text-[20px] text-[#3A99F1]">
                      KPI
                    </div>
                    <Tooltip title="KPI = Tỉ lệ hoàn thành nhiệm vụ * 60% + Hiệu suất làm việc * 40%">
                      <InfoIcon width="20" height="20" />
                    </Tooltip>
                  </div>
                      <Flex
                        align="center"
                        justify="center"
                        wrap gap={50}
                        onClick={handleDetailModal}
                        className="xl:!w-[200px]"

                      >
                        <Progress type="circle" size={200} percent={83.4} />
                      </Flex>
                  <Button
                    className="bg-primary-600 mt-[10px] h-[32px] text-white !rounded-md text-[18px] "
                    onClick={handleOpenModal}
                  >
                    Đánh giá từ hệ thống
                  </Button>
                </div>
                <div className="w-full flex flex-col">
                  <div className="flex  mb-[20px]">
                    <div className="flex w-full justify-center font-medium text-[20px] text-[#3A99F1]">
                      Số giờ dự kiến và thực tế trong tuần
                    </div>
                  </div>
                    <div className="!w-full !min-w-[400px] h-[300px] xl:h-[400px]">  
                    <BarChart trigger={trigger} />
                    </div>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between gap-[30px] w-full">
                <div className="flex flex-col gap-[30px] justify-center items-center">
                <div className="flex flex-col gap-[30px] justify-center items-center">
                  <div className="flex flex-row items-center gap-3">
                    <div className="font-medium text-[20px] text-[#3A99F1]">
                      KPI
                    </div>
                    <Tooltip title="KPI = Tỉ lệ hoàn thành nhiệm vụ * 60% + Hiệu suất làm việc * 40%">
                      <InfoIcon width="20" height="20" />
                    </Tooltip>
                      </div>
                      <Flex
                        align="center"
                        justify="center"
                        wrap gap={80}
                        onClick={handleDetailModal}
                        className="xl:!w-[200px]"
                      >
                        <Progress type="circle" size={200} percent={83.4} />
                      </Flex>

                  <Button
                    
                    className="bg-primary-600 mt-[10px] h-[32px] text-white !rounded-md text-[18px] "
                    onClick={handleOpenModal}
                  >
                    Đánh giá từ hệ thống
                  </Button>
                </div>
                </div>
                <div className="w-full flex flex-col">
                  <div className="flex w-full justify-center font-medium text-[20px] text-[#3A99F1] mb-[20px]">
                    Số giờ dự kiến và thực tế trong tháng
                  </div>
                    <div className="!w-full !min-w-[400px] h-[300px] xl:h-[400px]">  
                      <LineChart trigger={trigger} />                
                      </div>
                  </div>
              </div>
            )}
          </div>
        </div>

      </div>
      <Modal
        open={!!isModal}
        footer={null}
        closeIcon={
          <CloseOutlined/>
        }
        centered
        onCancel={handleCloseModal}
      >
        <div className="flex flex-col gap-[12px] px-[20px] mb-[10px]">
          <div className="text-2xl flex gap-[10px] w-full justify-center flex-row items-center font-semibold text-primary-600">
            <p className="text-[26px] mb-[10px]">Đánh giá từ hệ thống</p>
            <ITooltip title="Những đánh giá của chúng tôi dựa trên những mô hình AI tân tiến nhất trên thế giới">
              <div className="relative "><InfoIcon width="20" height="20"/></div>
            </ITooltip>
           
          </div>
          <div className="flex flex-col gap-[10px]">
            {isLoading && <div>Chúng tôi đang tiến hành đánh giá </div>}
            {isLoading ? <div className="flex flex-row gap-1 text-[20px]">
              {[...word].map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0,}}
                  style={{ display: 'inline-block' }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: index * 0.2, repeat: Infinity }}
                >
                  {char}
                </motion.span>
              ))}
            </div>: (
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col border-[1px] gap-[20px] border-[#ccc] border-solid rounded-[20px] px-[10px] py-[6px]">
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-[6px] items-center">
                      <WarningIcon width="20" height="20" color="rgba(255, 77, 79, 1)"/>
                      <div className="text-accent-700 text-[18px]">Tiến độ thực hiện thấp</div>
                    </div> 
                    <div className="flex flex-row items-center justify-between px-[6px] gap-[10px] pt-[10px]">
                      <div className="flex flex-col gap-[6px]">
                        <div>
                          Số lượng nhiêm vụ được thực hiện thấp, tuần qua chỉ hoàn thành 20/40 Nhiệm vụ.
                        </div>  
                        <div>
                          Hôm nay là thứ 6 và trong tuần bạn chỉ còn 2 ngày làm việc, tôi nghĩ bạn sẽ không thể hoàn thành được các nhiệm vụ còn lại đúng hạn.
                        </div>
                      </div>
                      <div>
                        <svg width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M83 41.5C83 64.4198 64.4198 83 41.5 83C18.5802 83 0 64.4198 0 41.5C0 18.5802 18.5802 0 41.5 0C64.4198 0 83 18.5802 83 41.5ZM8.3 41.5C8.3 59.8359 23.1641 74.7 41.5 74.7C59.8359 74.7 74.7 59.8359 74.7 41.5C74.7 23.1641 59.8359 8.3 41.5 8.3C23.1641 8.3 8.3 23.1641 8.3 41.5Z" fill="#FB6969" fill-opacity="0.4"/>
                        <path d="M41.5 4.15C41.5 1.85802 39.6374 -0.0214919 37.3569 0.207328C32.9211 0.652397 28.5767 1.81027 24.4937 3.64452C19.146 6.04693 14.368 9.55512 10.4744 13.938C6.58087 18.3208 3.66008 23.4789 1.90448 29.0724C0.148884 34.6659 -0.401679 40.5679 0.289061 46.3896C0.9798 52.2113 2.89617 57.8206 5.91192 62.848C8.92767 67.8754 12.9744 72.2068 17.7855 75.5569C22.5965 78.9069 28.0628 81.1996 33.8242 82.284C38.2231 83.1119 42.7178 83.221 47.1345 82.6157C49.4053 82.3045 50.7764 80.0414 50.24 77.813V77.813C49.7037 75.5847 47.4618 74.2407 45.184 74.495C41.9166 74.8598 38.6054 74.7381 35.3594 74.1272C30.7503 73.2597 26.3772 71.4255 22.5284 68.7455C18.6795 66.0654 15.4421 62.6003 13.0295 58.5784C10.6169 54.5565 9.08384 50.0691 8.53125 45.4117C7.97866 40.7543 8.41911 36.0327 9.82358 31.5579C11.2281 27.0831 13.5647 22.9567 16.6796 19.4504C19.7944 15.9441 23.6168 13.1375 27.895 11.2156C30.9079 9.86209 34.0987 8.96894 37.3608 8.55904C39.6349 8.27328 41.5 6.44198 41.5 4.15V4.15Z" fill="#FB6969"/>
                        <path d="M34.1131 47.5859C33.4881 47.5859 32.9252 47.4616 32.4245 47.213C31.9238 46.9645 31.5225 46.6236 31.2207 46.1903C30.9188 45.7571 30.7537 45.2635 30.7253 44.7095H32.0037C32.0534 45.2031 32.2771 45.6115 32.6748 45.9346C33.0761 46.2542 33.5555 46.414 34.1131 46.414C34.5605 46.414 34.9582 46.3093 35.3062 46.0998C35.6578 45.8902 35.933 45.6026 36.1319 45.2368C36.3343 44.8675 36.4355 44.4503 36.4355 43.9851C36.4355 43.5092 36.3307 43.0848 36.1212 42.712C35.9153 42.3356 35.6312 42.039 35.269 41.8224C34.9067 41.6058 34.493 41.4957 34.0278 41.4922C33.694 41.4886 33.3513 41.5401 32.9998 41.6466C32.6482 41.7496 32.3588 41.8828 32.1315 42.0461L30.8957 41.897L31.5562 36.5277H37.2239V37.6996H32.6642L32.2807 40.9169H32.3446C32.5683 40.7393 32.8489 40.592 33.1862 40.4748C33.5236 40.3576 33.8751 40.299 34.2409 40.299C34.9085 40.299 35.5033 40.4588 36.0253 40.7784C36.5509 41.0944 36.9628 41.5277 37.2611 42.0781C37.563 42.6285 37.7139 43.2571 37.7139 43.9638C37.7139 44.6598 37.5577 45.2812 37.2452 45.8281C36.9362 46.3714 36.5101 46.8011 35.9668 47.1172C35.4234 47.4297 34.8055 47.5859 34.1131 47.5859ZM43.3882 47.5859C42.5856 47.5859 41.902 47.3675 41.3374 46.9307C40.7728 46.4904 40.3413 45.853 40.043 45.0184C39.7447 44.1804 39.5956 43.1683 39.5956 41.9822C39.5956 40.8032 39.7447 39.7965 40.043 38.962C40.3449 38.1239 40.7781 37.4847 41.3427 37.0444C41.9109 36.6005 42.5927 36.3785 43.3882 36.3785C44.1836 36.3785 44.8637 36.6005 45.4283 37.0444C45.9965 37.4847 46.4297 38.1239 46.728 38.962C47.0299 39.7965 47.1808 40.8032 47.1808 41.9822C47.1808 43.1683 47.0316 44.1804 46.7334 45.0184C46.4351 45.853 46.0036 46.4904 45.439 46.9307C44.8743 47.3675 44.1907 47.5859 43.3882 47.5859ZM43.3882 46.414C44.1836 46.414 44.8015 46.0305 45.2419 45.2635C45.6822 44.4964 45.9024 43.4027 45.9024 41.9822C45.9024 41.0376 45.8012 40.2333 45.5988 39.5692C45.3999 38.9052 45.1123 38.3991 44.7358 38.0511C44.363 37.7031 43.9138 37.5291 43.3882 37.5291C42.5998 37.5291 41.9837 37.9179 41.5398 38.6956C41.0959 39.4698 40.874 40.5653 40.874 41.9822C40.874 42.9268 40.9734 43.7294 41.1723 44.3899C41.3711 45.0504 41.657 45.5529 42.0299 45.8973C42.4063 46.2418 42.8591 46.414 43.3882 46.414ZM54.766 45.3913V44.816C54.766 44.4183 54.8477 44.0543 55.0111 43.7241C55.178 43.3902 55.4194 43.1239 55.7355 42.925C56.0551 42.7226 56.4422 42.6214 56.8967 42.6214C57.3584 42.6214 57.7454 42.7226 58.0579 42.925C58.3704 43.1239 58.6066 43.3902 58.7664 43.7241C58.9262 44.0543 59.0061 44.4183 59.0061 44.816V45.3913C59.0061 45.789 58.9244 46.1548 58.7611 46.4886C58.6013 46.8189 58.3633 47.0852 58.0473 47.2876C57.7348 47.4865 57.3513 47.5859 56.8967 47.5859C56.4351 47.5859 56.0462 47.4865 55.7302 47.2876C55.4141 47.0852 55.1744 46.8189 55.0111 46.4886C54.8477 46.1548 54.766 45.789 54.766 45.3913ZM55.8527 44.816V45.3913C55.8527 45.7216 55.9308 46.0181 56.087 46.2809C56.2433 46.5401 56.5132 46.6697 56.8967 46.6697C57.2696 46.6697 57.5324 46.5401 57.6851 46.2809C57.8413 46.0181 57.9194 45.7216 57.9194 45.3913V44.816C57.9194 44.4858 57.8449 44.191 57.6957 43.9318C57.5466 43.669 57.2802 43.5376 56.8967 43.5376C56.5238 43.5376 56.2557 43.669 56.0924 43.9318C55.9326 44.191 55.8527 44.4858 55.8527 44.816ZM49.3328 39.1484V38.5731C49.3328 38.1754 49.4145 37.8114 49.5778 37.4812C49.7447 37.1473 49.9862 36.881 50.3022 36.6822C50.6218 36.4797 51.0089 36.3785 51.4635 36.3785C51.9251 36.3785 52.3122 36.4797 52.6247 36.6822C52.9372 36.881 53.1733 37.1473 53.3331 37.4812C53.4929 37.8114 53.5728 38.1754 53.5728 38.5731V39.1484C53.5728 39.5461 53.4912 39.9119 53.3278 40.2457C53.168 40.576 52.9301 40.8423 52.614 41.0447C52.3015 41.2436 51.918 41.343 51.4635 41.343C51.0018 41.343 50.613 41.2436 50.2969 41.0447C49.9809 40.8423 49.7412 40.576 49.5778 40.2457C49.4145 39.9119 49.3328 39.5461 49.3328 39.1484ZM50.4194 38.5731V39.1484C50.4194 39.4787 50.4976 39.7752 50.6538 40.038C50.8101 40.2972 51.0799 40.4268 51.4635 40.4268C51.8363 40.4268 52.0991 40.2972 52.2518 40.038C52.4081 39.7752 52.4862 39.4787 52.4862 39.1484V38.5731C52.4862 38.2429 52.4116 37.9481 52.2625 37.6889C52.1133 37.4261 51.847 37.2947 51.4635 37.2947C51.0906 37.2947 50.8225 37.4261 50.6591 37.6889C50.4993 37.9481 50.4194 38.2429 50.4194 38.5731ZM49.7376 47.4368L57.2376 36.5277H58.4521L50.9521 47.4368H49.7376Z" fill="black"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                    <div className="flex flex-col gap-[10px]">
                      <div className="flex items-center gap-[6px]">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.2666 7.04257L13.9881 6.1301L11.1815 0.440169C11.1049 0.284382 10.9787 0.158269 10.823 0.0816118C10.4322 -0.111267 9.95747 0.0494654 9.76212 0.440169L6.95548 6.1301L0.677016 7.04257C0.50392 7.0673 0.34566 7.1489 0.224492 7.27254C0.0780074 7.4231 -0.00271244 7.62566 6.95995e-05 7.8357C0.00285164 8.04575 0.088908 8.24609 0.239329 8.39272L4.78188 12.8215L3.70868 19.0753C3.68351 19.2207 3.69961 19.3703 3.75515 19.5071C3.81069 19.6439 3.90344 19.7624 4.0229 19.8492C4.14235 19.9359 4.28372 19.9875 4.43099 19.998C4.57825 20.0085 4.72551 19.9775 4.85606 19.9086L10.4718 16.9561L16.0876 19.9086C16.2409 19.9902 16.4189 20.0174 16.5895 19.9877C17.0198 19.9135 17.3091 19.5055 17.2349 19.0753L16.1617 12.8215L20.7043 8.39272C20.8279 8.27156 20.9095 8.1133 20.9343 7.9402C21.001 7.50746 20.6993 7.10686 20.2666 7.04257ZM14.2503 12.1984L15.1429 17.3987L10.4718 14.9457L5.80068 17.4012L6.69336 12.2008L2.91491 8.51636L8.13748 7.75721L10.4718 3.02673L12.8061 7.75721L18.0287 8.51636L14.2503 12.1984Z" fill="rgb(59 130 246)"/>
                        </svg>
  
                      <div className="text-blue-500 text-[18px]">Một số đề xuất giúp bạn tăng hiệu suất làm việc</div>
                      </div>
                    <div className="flex flex-col gap-[2px] px-[6px]">
                      <li>1. Ưu tiên nhiệm vụ quan trọng</li>
                      <li>2. Sử dụng kỹ thuật Pomodoro</li>
                      <li>3. Xác định thời gian làm việc không bị gián đoạn</li>
                      <li>4. Nhóm các nhiệm vụ tương tự</li>
                      <li>5. Tự động hóa các nhiệm vụ lặp lại</li>
                      <li>6. Tăng cường giao tiếp và hợp tác</li>
                      <li>7. Duy trì sức khỏe và tinh thần</li>
                      <li>8. Đặt mục tiêu cụ thể và khen thưởng</li>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>
      </Modal>
      <Modal
        open={!!isModalDetail}
        width={340}
        footer={null}
        centered
        onCancel={handleCloseModal}
        closeIcon={
          <CloseOutlined/>
        }
      >
          <div className="w-full items-center justify-start pt-[30px] pb-[10px]">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-[10px] w-full text-[16px]">
                <div className="flex item-center justify-between gap-[20px]">
                  <div>Tổng số task:</div>
                    <div>20</div>
                </div>
                
                <div className="flex item-center justify-between">
                  <div>Số task chưa hoàn thành:</div>
                    <div>10</div>
                </div>
                
                <div className="flex item-center justify-between">
                  <div>Số giờ thực tế đã làm:</div>
                    <div>40</div>
                </div>
                
                <div className="flex item-center justify-between gap-[20px]">
                  <div>Số giờ đã đề ra</div>
                    <div>30</div>
                </div>
                
  
                <div className="flex item-center justify-between">
                  <div className="">Task có hiệu suất tốt nhất:</div>
                    <div>Ngữ pháp</div>
                </div>
                
  
                <div className="flex item-center justify-between">
                  <div className="x">Task có hiệu suất tồi nhất nhất: </div>
                    <div>Đọc hiểu</div>
                </div>
                
  
                <div className="flex item-center justify-between">
                  <div>Số task muộn</div>
                    <div>2</div>
                </div>
                
                </div>
                <div className="flex flex-col gap-[10px]">
                </div>
            </div>
          </div>
      </Modal>
    </div>
  );
}
