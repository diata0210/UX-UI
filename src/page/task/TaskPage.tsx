import FilterByKPI from "@/components/task/filter-task-by-kpi";
import FilterByTaskStatus from "@/components/task/filter-task-by-status";
import TaskItem from "@/components/task/task-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TASKS } from "@/utils/constants/mockData";
import { Pagination, PaginationProps } from "antd";
import { useState } from "react";

type Props = {};
const allTasks = Object.values(TASKS).flat();

export default function TaskPage({}: Props) {
  
  const [pageTask, setPageTask] = useState(TASKS[1]);
  const [valueStatus, setValueStatus] = useState(null);

  const onChange: PaginationProps["onChange"] = (pageNumber: number) => {
    let tasks = TASKS[pageNumber as keyof typeof TASKS];
    setPageTask(tasks);
    if (valueStatus) {
      setPageTask(
        allTasks
          .filter((task: any) => task.status == valueStatus)
          .slice(6 * (pageNumber - 1), 6 * pageNumber)
      );
    }
  };

  const onFilterStatus = (value: any) => {
    setValueStatus(value);
    setPageTask(
      allTasks.filter((task: any) => task.status == value).slice(0, 6)
    );
    console.log(pageTask);
  };

  const handleEditTask = (id: any) => {
    console.log("edit task", id);
    window.location.href = `/edit_task/${id}`;
  };

  const handleReset = () => {
    location.reload();
  };

  const handleAddTask = () => {
    window.location.href = "/new_task";
  }
  return (
    <div className="flex flex-col 2xl:gap-[60px] xl:gap-[40px] gap-[30px]">
      <div className="flex flex-col gap-[26px] w-full">
        <div className="flex flex-row justify-between items-center h-full">
          <div
            className="text-4xl font-semibold text-primary-600 cursor-pointer"
            onClick={handleReset}
          >
            Nhiệm vụ
          </div>
              <Button
                variant="submit"
                className="text-white font-normal hover:opacity-90 !w-[200px]"
                onClick={handleAddTask}
              >
                Thêm nhiệm vụ
              </Button>
          </div>

        <div className="flex flex-col xl:gap-[50px] gap-[30px]">
          <div className="flex flex-row h-[40px] items-center gap-[40px] justify-between w-full">
            <div className="flex md:flex-row w-full flex-col gap-[30px] items-center justify-start h-full">
              <Input
                placeholder="Lọc theo tên"
                className="w-[260px] h-[32px] xl:h-[32px] "
              />
              <FilterByTaskStatus
                defautValue=""
                value={valueStatus}
                onChange={onFilterStatus}
              />
              <FilterByKPI
                defautValue=""
                onChange={onFilterStatus}
              />
            </div>
          </div>

          <div className="w-full xl:gap-[45px] gap-[20px] flex-wrap flex flex-row justify-between">
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
          total={35}
          showSizeChanger
          showQuickJumper
          showTotal={(total) => `Total ${total} items`}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
