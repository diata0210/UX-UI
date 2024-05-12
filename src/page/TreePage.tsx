import garden from '@/assets/imgs/garden.png';
import treebadge from '@/assets/imgs/treebadge.png';
type Props = {}

export default function TreePage({ }: Props) {
  return (
    <div>
      <div className="flex flex-row items-left">
        <div className="flex flex-row col-left">
          <div className=" text-blue-500 text-4xl font-semibold font-inter">Cây của bạn
            <div className="text-black text-3xl font-bold font-inter">16</div>
            <div className="relative">
              <div className="w-[734px] h-[544px] bg-white rounded-lg">
                <img className="w-full h-full" src={garden} alt="Garden" />
              </div>
              <div className="w-[734px] h-[544px] bg-white rounded-lg">
                <img className="w-14 h-14 absolute right-4 top-4" src={treebadge} alt="Tree Badge" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}