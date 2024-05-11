import CalendarIcon from "@/assets/icons/sidebar/calendar";
import EvaluationIcon from "@/assets/icons/sidebar/evaluation";
import HelpIcon from "@/assets/icons/sidebar/help";
import HomeIcon from "@/assets/icons/sidebar/home";
import SettingIcon from "@/assets/icons/sidebar/setting";
import TaskIcon from "@/assets/icons/sidebar/task";
import TreeIcon from "@/assets/icons/sidebar/tree";

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'HomeIcon':
      return <HomeIcon />;
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
    case 'HelpIcon':
      return <HelpIcon />;
    default:
      return null;
  }
};


type Props = {
  icon: string;
  name: string;
}

export default function SidebarItem({icon, name}: Props) {
  return (
    <div className='flex items-center gap-[34px]'>
        {renderIcon(icon)}
        <div className="2xl:text-[28px] text-[24px] text-slate-400 font-medium h-full 2xl:leading-[48px] leading-[40px]">{name}</div>
    </div>
  )
}