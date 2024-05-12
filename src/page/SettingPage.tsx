import { Button } from "@/components/ui/button";
import CascaderInput from "@/components/ui/cascaderInput";
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
  return (
    <div
      className=" setting-container flex  flex-col flex bg-white rounded-[10px] border-2 border-[#d9d9d9] mt-[10px] w-full h-[85vh] "

    >
      <div className='breadcrum'>
        <div className='flex-grow-0 flex-shrink-0  text-[36px] font-semibold text-left text-[#4677d4] mt-[15px] ml-[43px]'>
          Cài đặt
        </div>
      </div>
      <div className="content mx-[50px] relative overflow-hidden bg-[#f9fafe] flex flex-col gap-[55px]">
        <div className=' flex flex-row '>
          <div className='content-left w-1/2 pl-[58px] mt-[25px] flex flex-col gap-[10px]'>

            <CascaderInput label='Ngôn ngữ' options={language} defaultvalue='vietnam' width="75%" />
            <div className='format flex flex-row gap-[14px] w-full' >
              <CascaderInput label='Định dạng' options={fomartDate} defaultvalue='MM/DD/YYYY' />
              <CascaderInput label='Định dạng giờ' options={fomartTime} defaultvalue='12' />
            </div>
            <CascaderInput label='Quốc gia' options={country} defaultvalue='vietnam' width="75%" />
            <CascaderInput label='Múi giờ' options={timezone} defaultvalue='+7' width="75%" />
            <div className=" ml-[35px] mt-[16px] flex justify-center items-center h-[44px] w-1/2 border-2 border-solid rounded-[10px] bg-white border-[#0069ff] text-[14px] font-medium text-[#0069ff]">
              Thêm lịch
            </div>
          </div>

          <div className='cotent-right  w-1/2 pl-[58px] mt-[25px] flex flex-col gap-[10px]'>
            <CascaderInput label='Cài đặt thông báo' options={notify} defaultvalue='screen' width="75%" />
            <CascaderInput label='Thông báo trước sự kiện' options={notifyBefore} defaultvalue='30' width="75%" />
            <CascaderInput label='Bắt đầu tuần vào' options={weekStart} defaultvalue='monday' width="75%" />
            <CascaderInput label='Hiển thị lịch các ngày lễ' options={holidayDisplay} defaultvalue='no' width="75%" />
          </div>
        </div>
        <div className="submmit-button flex align-center justify-around mb-[30px]">
          <Button variant="destructive" className="text-white ">Đặt lại mặc định</Button>
          <Button variant="submit" className="text-white " >Lưu thay đổi</Button>
        </div>

      </div>




    </div>
  )
}