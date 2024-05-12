import InfoIcon from "@/assets/icons/info"

type Props = {}

export default function HomePage({ }: Props) {
  return (
    <div className="flex flex-row gap-[60px] mt-[18px] w-full">
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[10px] w-2/3">
          <div className="flex flex-row gap-1">
            <div className="text-[22px] font-medium">Số giờ làm việc tuần vừa qua</div>
            <InfoIcon />
          </div>
          <img src="/graph.png" alt="1" />
        </div>

        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-row gap-1">
            <div className="text-[22px] font-medium">Thống kê KPI</div>
            <InfoIcon />
          </div>

          <div>

          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-row gap-1">
            <div className="text-[22px] font-medium">Thống kê KPI</div>
            <InfoIcon />
          </div>
          <img src="/chart_1.png" alt="2" className="pr-[10px] " />
          <div className="justify-end flex text-[18px] pr-[2px] font-normal">
            <span className=" hover:text-accent-700 pr-[20px]">Xem tất cả</span>
          </div>
        </div>

        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-row gap-1">
            <div className="text-[22px] font-medium">Cây của tôi</div>
            <InfoIcon />
          </div>

          <img src="tree.png" alt="" className="" />
        </div>
      </div>
    </div>
  )
}