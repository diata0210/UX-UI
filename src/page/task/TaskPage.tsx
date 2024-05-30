import FilterByTaskStatus from "@/components/task/filter-task-by-status"
import TaskItem from "@/components/task/task-item"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TASKS } from "@/utils/constants/mockData"
import { Pagination, PaginationProps } from "antd"
import { useState } from "react"
import { useTaskContext } from "@/contexts/TaskContext"

type Props = {}

export default function TaskPage({ }: Props) {

  const [pageTask, setPageTask] = useState(TASKS[1]);
  const [valueStatus, setValueStatus] = useState(null);
  
  const {allTask} = useTaskContext() 
  
  return (
    <div className="flex flex-col gap-[60px] justify-center">
      <div className="flex flex-col gap-[40px] w-full">
        <div className="flex flex-row justify-start h-full">
          <div className="text-4xl font-semibold text-primary-600 cursor-pointer">
            Nhiệm vụ
          </div>
        </div>

        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-row h-[40px] items-center gap-[40px] justify-between">
            <div className="flex flex-row gap-[30px] items-center justify-center h-full">
              <Input placeholder="Lọc theo tên" className="w-[300px]" />
              <FilterByTaskStatus  />
            </div>
            <Button variant="submit" size="sm" className="text-white text-lg font-normal h-[40px] hover:opacity-90">Tìm kiếm</Button>
          </div>
          <div className="flex flex-col justify-center">
                      <div className=" flex-wrap flex flex-row gap-7 ">
            {allTask.map((task : any) => (
                <TaskItem
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


          <></>
        </div>
      </div>
      <div className="flex justify-center">
        <Pagination
          total={85}
          showSizeChanger
          showQuickJumper
          showTotal={(total) => `Total ${total} items`}
          // onChange={onChange}

        />
      </div>
    </div>
  )
}