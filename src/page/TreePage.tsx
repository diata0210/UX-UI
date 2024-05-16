import garden from '@/assets/imgs/garden.png';
import guidebook from '@/assets/imgs/guidebook.png';
import tree_treepage from '@/assets/imgs/tree_treepage.png';
import treebadge from '@/assets/imgs/treebadge.png';
type Props = {}

export default function TreePage({ }: Props) {
  return (
    <div className="flex flex-col gap-[27px] pb-[26px] h-full">
      <div className='flex flex-row gap-[50px]'>
        <div className="h-full text-blue-500 text-4xl font-semibold font-inter">Cây của bạn</div>
        <img className="h-8 w-8 rounded-full" src={guidebook} alt="guidebook" />
      </div>
      <div className="flex flex-row gap-[60px] h-full">
        <div className='w-2/3 max-w-[734px] h-full pt-[20px] flex flex-col px-[42px] z-[999] bg-white/opacity-20 rounded-[20px]'
          style={{
            boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.25)'
          }}
        >
          <div className="flex flex-row-reverse items-center gap-[18px]">
            <img className="w-[52px] h-[52px]" src={treebadge} alt="Tree Badge"  />
            <div className="text-black text-3xl font-bold font-inter">16</div>
          </div>
          <div className="relative">
            <img className="w-full h-full" src={garden} alt="Garden" />
          </div>
        </div>

        <div className='w-1/3 h-full flex items-center'>
          <img className="w-full h-full" src={tree_treepage} alt="tree_treepage"  />
        </div>
      </div>

    </div>
  )
}