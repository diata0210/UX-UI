import moment from "moment";
import {
  Calendar as BigCalendar,
  CalendarProps,
  momentLocalizer,
  Views
} from "react-big-calendar";

const localizer = momentLocalizer(moment);
export default function CalendarPage(props: Omit<CalendarProps, "localizer">) {
  return (
    <BigCalendar
      {...props}
      localizer={localizer}
      views={[Views.DAY, Views.WEEK, Views.MONTH]}
    />
  );
}