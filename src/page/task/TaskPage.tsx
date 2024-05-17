import FilterByTaskStatus from "@/components/task/filter-task-by-status"
import TaskItem from "@/components/task/task-item"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TASKS } from "@/utils/constants/mockData"
import { Pagination, PaginationProps } from "antd"
import { useState } from "react"

type Props = {}
const allTasks = Object.values(TASKS).flat();

export default function TaskPage({ }: Props) {

  const [pageTask, setPageTask] = useState(TASKS[1]);
  const [valueStatus, setValueStatus] = useState(null);

  const onChange: PaginationProps['onChange'] = (pageNumber: number) => {
    let tasks = TASKS[pageNumber];
    setPageTask(tasks);
    if (valueStatus) {
      setPageTask(allTasks.filter((task: any) => task.status == valueStatus).slice(6 * (pageNumber - 1), 6 * pageNumber));
    }
  };

  const onFilterStatus = (value: any) => {
    setValueStatus(value);
    setPageTask(allTasks.filter((task: any) => task.status == value).slice(0, 6));
    console.log(pageTask)
  }


  const handleEditTask = (id: string) => {
    console.log("edit task", id);
    window.location.href = `/edit_task/${id}`;
  }

  const handleReset = () => {
    location.reload();
  }
  
  return (
    <div className="flex flex-col gap-[60px]">
      <div className="flex flex-col gap-[40px] w-full">
        <div className="flex flex-row justify-start h-full">
          <div className="text-4xl font-semibold text-primary-600 cursor-pointer" onClick={handleReset}>
            Nhiệm vụ
          </div>
        </div>

        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-row h-[40px] items-center gap-[40px] justify-between">
            <div className="flex flex-row gap-[30px] items-center justify-center h-full">
              <Input placeholder="Lọc theo tên" className="w-[300px]" />
              <FilterByTaskStatus defautValue="" value={valueStatus} onChange={onFilterStatus}  />
            </div>
            <Button variant="submit" size="sm" className="text-white text-lg font-normal h-[40px] hover:opacity-90">Tìm kiếm</Button>
          </div>

          <div className="w-full gap-[45px] flex-wrap flex flex-row  justify-between">
            {pageTask.map((task) => (
              <div key={task.id} onClick={() => handleEditTask(task.id)}>
                <TaskItem
                  name={task.name}
                  status={task.status}
                  date={task.date}
                  time={task.time}
                  place={task.place}
                  number_file={task.number_file}
                />
              </div>
            ))}

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
          onChange={onChange}

        />
      </div>
    </div>
  )
}