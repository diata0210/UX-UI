import InfoIcon from "@/assets/icons/info";
import garden from "@/assets/imgs/garden.png";
import treebadge from "@/assets/imgs/treebadge.png";

import { Tooltip } from "antd";
type Props = {};

export default function TreePage({}: Props) {
  return (
    <div className="flex flex-col gap-[20px] pb-[12px] h-full overflow-y-hidden">
      <div className="flex flex-row gap-[15px] items-end">
        <div className="h-full text-blue-500 text-4xl font-semibold font-inter">
          Cây của tôi
        </div>
        <Tooltip title="Với mỗi cây bạn trồng được trong ứng dụng chúng tôi sẽ thay bạn trồng 1 cây ngoài đời. Vì vậy hãy cùng nhau bảo vệ môi trường nào">
          <div className="relative" style={{ bottom: "5px" }}>
            <InfoIcon />
          </div>
        </Tooltip>
      </div>
      <div className="flex flex-row xl:gap-[60px] gap-[30px] h-full">
        <div className="w-2/3 h-full flex flex-col px-[42px] border-solid border-[1px] border-[#def] pt-[8px] z-[999] bg-white/opacity-20 rounded-[20px]">
          <div className="flex flex-row-reverse items-center gap-[18px]">
            <img
              className="w-[40px] h-[40px]"
              src={treebadge}
              alt="Tree Badge"
            />
            <div className="text-black text-3xl font-bold font-inter">16</div>
          </div>
          <div className="relative">
            <img className="w-full h-full" src={garden} alt="Garden" />
          </div>
        </div>

        <div className="w-1/3 border-solid border-[1px] border-[#def] h-full rounded-[20px] flex items-center">
          <img
            className="w-full h-full"
            src="tree_page.png"
            alt="tree_treepage"
          />
        </div>
      </div>
    </div>
  );
}
