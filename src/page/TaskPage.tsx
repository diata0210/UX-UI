import FilterByTaskStatus from "@/components/task/filter-task-by-status"
import TaskItem from "@/components/task/task-item"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TASKS } from "@/utils/constants/mockData"

type Props = {}

export default function TaskPage({ }: Props) {

  const filterStatus = () => {
    console.log("filterStatus")
  }
  return (
    <div className="flex flex-col gap-[40px]">
      <div className="flex flex-row justify-between">
        <div className="text-4xl font-semibold text-primary-600">
          Nhiệm vụ
        </div>
        <div className="bg-green-500 w-[240px] rounded-[15px] h-[40px] flex">
          <div className="bg-red-400 w-4/5 rounded-[15px] flex justify-center items-center">
            <div className="text-white text-2xl font-bold px-[10px]">Tiến độ 35/50</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-row h-[40px] items-start gap-[40px]">
          <div className="flex flex-row gap-[30px] items-center justify-center h-full">
            <Input placeholder="Lọc theo tên" className="w-[300px]" />
            <FilterByTaskStatus value="" onChange={filterStatus} />
          </div>
          <Button variant="submit" size="sm" className="text-white text-lg font-normal">Tìm kiếm</Button>
        </div>

        <div className="w-full gap-[60px] flex-wrap flex flex-row  pr-[60px]">
          {TASKS.map((task, index) => (
            <TaskItem
              key={index}
              name={task.name}
              status={task.status}
              date={task.date}
              time={task.time}
              place={task.place}
              number_file={task.number_file}
            />
          ))}
        </div>
      </div>
    </div>
  )
}