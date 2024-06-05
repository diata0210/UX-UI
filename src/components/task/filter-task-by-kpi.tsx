import { Select } from "antd";

type Props = {
  defautValue?: string;
  onChange?: (a: any) => void;
  value?: string | null;
};

export default function FilterByKPI({ onChange }: Props) {
  return (
    <Select
      onChange={onChange}
      className="bg-white rounded-[8px] w-[260px] h-[32px] border-[#000]"
      placeholder="Lọc theo KPI"
    >
      <Select.Option
        value="1"
        className=" text-gray-800 text-xl font-normal hover:opacity-90"
      >
        Tiếng Nhật
      </Select.Option>
      <Select.Option
        value="2"
        className=" text-gray-800 text-xl font-normal hover:opacity-90"
      >
        UX-UI
      </Select.Option>
      <Select.Option
        value="2"
        className=" text-gray-800 text-xl font-normal hover:opacity-90"
      >
        IT
      </Select.Option>
    </Select>
  );
}
