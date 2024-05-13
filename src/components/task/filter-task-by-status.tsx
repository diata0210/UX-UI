import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

type Props = {
  defautValue?: string;
  onChange?: () => void;
  value?: string;
  
}

export default function FilterByTaskStatus({
  defautValue,
  onChange,
  value
}: Props) {

  console.log(value);
  return (
      <Select defaultValue={defautValue} value={value} onValueChange={onChange}>
        <SelectTrigger className="w-[300px] h-full bg-white rounded shadow">
          <SelectValue className="rounded-[15px] shadow" placeholder={defautValue === "1" ? "Chưa hoàn thành" : defautValue === "2" ? "Đã hoàn thành" : "Lọc theo trạng thái"}>
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-white rounded-[10px] border border-neutral-400">
          <SelectItem value="1" className=" text-gray-800 text-xl font-normal hover:opacity-90">Chưa hoàn thành</SelectItem>
          <SelectItem value="2" className=" text-gray-800 text-xl font-normal hover:opacity-90">Đã hoàn thành</SelectItem>
        </SelectContent>
      </Select>

  )
}