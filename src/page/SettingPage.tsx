import { Button } from "@/components/ui/button";
import CascaderInput from "@/components/ui/cascaderInput";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
const language = [
  {
    value: 'vietnam',
    label: 'Tiếng Việt',
  },
  {
    value: 'english',
    label: 'English',
  },
];

const fomartDate = [
  {
    value: 'MM/DD/YYYY',
    label: 'MM/DD/YYYY',
  },
  {
    value: 'DD/MM/YYYY',
    label: 'DD/MM/YYYY',
  },
];

const fomartTime = [
  {
    value: '12',
    label: '12H (AM/PM)',
  },
  {
    value: '24',
    label: '24H',
  },
];
const country = [
  {
    value: 'vietnam',
    label: 'Việt Nam',
  },
  {
    value: 'usa',
    label: 'Mỹ',
  },
];

const timezone = [
  {
    value: '+7',
    label: '(GMT+7:00) Giờ Đông Dương, TP Hồ Chí Minh',
  },
  {
    value: '+5',
    label: '(GMT+5:00) Nhật Bản, Hàn Quốc',
  },
];

const notify = [
  {
    value: 'screen',
    label: 'Thông báo trên màn hình',
  },
  {
    value: 'mail',
    label: 'Gửi qua email',
  },
];

const notifyBefore = [
  {
    value: '15',
    label: '15 Phút',
  },
  {
    value: '30',
    label: '30 Phút',
  },
];

const weekStart = [
  {
    value: 'monday',
    label: 'Thứ hai',
  },
  {
    value: 'sunday',
    label: 'Chủ Nhật',
  },
]

const holidayDisplay = [
  {
    value: 'yes',
    label: 'Có',
  },
  {
    value: 'no',
    label: 'Không',
  },
]


type Props = {}

export default function SettingPage({ }: Props) {
  const handleSubmit = () => {
    toast.success("Cập nhật thành công")
  }
  const handleReset = () => {
    toast.success("Đã thiết lập lại cài đặt")
  }
  return (
    <div
      className="flex-col flex rounded-[10px] border-2 border-[#d9d9d9] mt-[10px] w-full overscroll-y"
    >
      <div className='relative'>
        <div className='flex-grow-0 flex-shrink-0 text-[36px] font-semibold text-left text-[#4677d4] ml-[0px] '>
          Cài đặt
        </div>
      </div>
      <div className=" w-full relative  flex flex-col gap-[55px] ">
        <div className=' flex flex-row '>
          <div className=' w-1/2 md:mt-[28px] mt-[20px] flex flex-col gap-[10px]'>

            <CascaderInput label='Ngôn ngữ' options={language} defaultvalue='vietnam' />
            <div className='format flex flex-row gap-[14px] w-full justify-between w-[200px]' >
              <div className="w-1/2">
                <CascaderInput label='Định dạng' options={fomartDate} defaultvalue='MM/DD/YYYY' />
              </div>
              <div className="w-1/2">
                <CascaderInput label='Định dạng giờ' options={fomartTime} defaultvalue='12' />
              </div>
            </div>
            <CascaderInput label='Quốc gia' options={country} defaultvalue='vietnam' />
            <CascaderInput label='Múi giờ' options={timezone} defaultvalue='+7' />
            <div className=" ml-[35px] mt-[16px] flex justify-center items-center h-[44px] w-1/2 border-2 border-solid rounded-[10px] bg-white border-[#0069ff] text-[14px] font-medium text-[#0069ff]">
              Thêm lịch
            </div>
          </div>

          <div className='cotent-right  w-1/2 pl-[58px] mt-[25px] flex flex-col gap-[10px]'>
            <CascaderInput label='Cài đặt thông báo' options={notify} defaultvalue='screen' />
            <CascaderInput label='Thông báo trước sự kiện' options={notifyBefore} defaultvalue='30' />
            <CascaderInput label='Bắt đầu tuần vào' options={weekStart} defaultvalue='monday' />
            <CascaderInput label='Hiển thị lịch các ngày lễ' options={holidayDisplay} defaultvalue='no' />
          </div>
        </div>
        <div className="submmit-button flex align-center justify-around mb-[30px]">
          <Button variant="destructive" onClick={handleReset} className="text-white ">Đặt lại mặc định</Button>
          <Button variant="submit" onClick={handleSubmit} className="text-white " >Lưu thay đổi</Button>
        </div>

      </div>




    </div>
  )
}