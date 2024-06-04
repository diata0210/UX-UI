import CalendarIcon from "@/assets/icons/sidebar/calendar";
import EvaluationIcon from "@/assets/icons/sidebar/evaluation";
import HomeIcon from "@/assets/icons/sidebar/home";
import SettingIcon from "@/assets/icons/sidebar/setting";
import TaskIcon from "@/assets/icons/sidebar/task";
import TreeIcon from "@/assets/icons/sidebar/tree";
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
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
    default:
      return null;
  }
};

type Props = {
  icon: string;
  name: string;
  href: string;
  isActive?: boolean;
}

export default function SidebarItem({
  icon,
  name,
  href,
  isActive
}: Props) {
  return (
    <NavLink to={href} replace={true}>
      <motion.div
        className='mx-[10px] rounded-[15px]'
        initial={isActive === true ? { backgroundColor: '#B4E6FF' } : { backgroundColor: '#FFF' }}
        whileHover={{
          color: '#FFF',
          backgroundColor: '#E8F7FF',
        }}
        whileTap={{
          backgroundColor: '#B4E6FF',
          opacity: 0.5
        }}
        animate={isActive === true ?
          {
            backgroundColor: '#B4E6FF',
            border: "none",
            outline: "none",
          } : { backgroundColor: '#FFF' }

        }

        transition={{ duration: 0.2 }}
      >

        <div className="flex items-center gap-[20px] px-[30px] py-[6px]">
          <div>
            {renderIcon(icon)}
          </div>
          <div className="2xl:text-[28px] text-[24px] text-text-default font-medium h-full">
            {name}
          </div>
        </div>
      </motion.div>
    </NavLink>
  )
}