import InfoIcon from "@/assets/icons/info"

type Props = {}

export default function HomePage({ }: Props) {
  return (
    <div className="pb-[31px]">
      <div className="flex flex-row gap-[38px]">
        <div className="flex flex-col gap-[89px]">
          <div className="flex flex-col gap-[42px]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-[4px]">
                <div className="text-[22px] font-semibold">Thống kê KPI</div>
                <InfoIcon />
              </div>
              <div className="text-lg font-semibold hover:text-accent-700" >
                Xem tất cả
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <img src="/chart_1.png" alt="chart" className="object-contain" />
              <img src="/chart_2.png" alt="chart" className="object-contain" />
            </div>
          </div>

          <div className="flex flex-col gap-[37px]">
            <div className="flex flex-row gap-[4px]">
              <div className="text-[22px] font-semibold">Số giờ làm việc tuần vừa qua</div>
              <InfoIcon />
            </div>
            <img src="graph.png" alt="graph" className="object-contain" />
          </div>
        </div>

        <div>
          {/* Hoat dong gan day */}
        </div>
      </div>
    </div>
  )
}