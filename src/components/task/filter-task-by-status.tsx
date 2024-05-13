import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

type Props = {
  value?: string;
  onChange?: () => void;
}

export default function FilterByTaskStatus({
  value,
  onChange
}: Props) {
  return (
      <Select>
        <SelectTrigger className="w-[300px] h-full bg-white rounded shadow">
          <SelectValue className="rounded-[15px] shadow" placeholder={value === "1" ? "Chưa hoàn thành" : value === "2" ? "Đã hoàn thành" : "Lọc theo trạng thái"}>
          </SelectValue>
        </SelectTrigger>
        <SelectContent defaultValue={value} onChange={onChange}>
          <SelectItem value="1">Chưa hoàn thành</SelectItem>
          <SelectItem value="2">Đã hoàn thành</SelectItem>
        </SelectContent>
      </Select>

  )
}