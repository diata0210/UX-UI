
type Props = {
  name: string;
  status: number;
  required: boolean;
  date: string;

}

export default function TaskItem({
  name,
  status,
  required,
  date
}: Props) {
  return (
    <div className="w-[156px] p-[6px] ">

    </div>
  )
}