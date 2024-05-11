import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  value?: string;
}

export default function FilterTypeCalendar({ value }: Props) {

  return (
    <Select>
      <SelectTrigger className="w-24 h-9 bg-white rounded shadow">
        <SelectValue placeholder={value === "1" ? "Ngày" : value === "2" ? "Tuần" : value === "3" ? "Tháng" : null}>
        </SelectValue>
      </SelectTrigger>
      <SelectContent defaultValue={value} >
        <SelectItem value="1">Ngày</SelectItem>
        <SelectItem value="2">Tuần</SelectItem>
        <SelectItem value="3">Tháng</SelectItem>
      </SelectContent>
    </Select>
  )
}