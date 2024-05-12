import CalendarIcon from "@/assets/icons/sidebar/calendar";
import EvaluationIcon from "@/assets/icons/sidebar/evaluation";
import HomeIcon from "@/assets/icons/sidebar/home";
import SettingIcon from "@/assets/icons/sidebar/setting";
import TaskIcon from "@/assets/icons/sidebar/task";
import TreeIcon from "@/assets/icons/sidebar/tree";
import { NavLink } from 'react-router-dom';
const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'HomeIcon':
      return <HomeIcon/>;
    case 'CalendarIcon':
      return <CalendarIcon />;
    case 'TaskIcon':
      return <TaskIcon />;
    case 'EvaluationIcon':
      return <EvaluationIcon />;
    case 'TreeIcon':
      return <TreeIcon />;
    case 'SettingIcon':
      return <SettingIcon />;
    default:
      return null;
  }
};


type Props = {
  icon: string;
  name: string;
  href: string;
}

export default function SidebarItem({icon, name, href}: Props) {
  return (
    <NavLink to={href} replace={true}>
      <div className='flex items-center gap-[20px]'>
          <div>
            {renderIcon(icon)}
          </div>
          <div className="2xl:text-[28px] text-[24px] text-text-default font-medium h-full">{name}</div>
      </div>
    </NavLink>
  )
}