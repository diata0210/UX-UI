import AddEditTaskPage from "@/components/task/add-edit-task-form";

type Props = {
  id: string;
}

export default function EditTaskPage({
  id
}: Props) {
  return (
    <div>
      <AddEditTaskPage id={id} />
    </div>
  )
}