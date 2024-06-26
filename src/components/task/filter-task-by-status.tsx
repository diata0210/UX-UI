import { Select } from "antd";

type Props = {
  defautValue?: string;
  onChange?: (a: any) => void;
  value?: string | null;
};

export default function FilterByTaskStatus({ onChange, value }: Props) {
  console.log(value);
  return (
    <Select
      onChange={onChange}
      className="bg-white rounded-[8px] w-[260px] h-[32px] border-[#000]"
      placeholder="Lọc theo trạng thái"
    >
      <Select.Option
        value="1"
        className=" text-gray-800 text-xl font-normal hover:opacity-90"
      >
        Chưa hoàn thành
      </Select.Option>
      <Select.Option
        value="2"
        className=" text-gray-800 text-xl font-normal hover:opacity-90"
      >
        Đã hoàn thành
      </Select.Option>
    </Select>
  );
}
