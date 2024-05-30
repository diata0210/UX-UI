import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  CalendarOutlined,
  SettingOutlined
  

} from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleRight, faCalendarDays, faChartLine, faGear, faHouse, faListCheck, faTree, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Flex, Layout, Menu, theme } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import './sidebar.css'
const {  Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Trang chủ', '/', <FontAwesomeIcon  style={{fontSize: 'unset'}} icon={faHouse}  />),
  getItem('Lịch', '/calendar', <FontAwesomeIcon  style={{fontSize: 'unset'}} icon={faCalendarDays}  />),
  getItem('Nhiệm vụ', '/task',<FontAwesomeIcon  style={{fontSize: 'unset'}} icon={faListCheck}  />),
  getItem('Đánh giá', '/report', <FontAwesomeIcon  style={{fontSize: 'unset'}} icon={faChartLine}  />),
  getItem('Cây của tôi', '/tree',<FontAwesomeIcon  style={{fontSize: 'unset'}} icon={faTree} />),
  getItem('Cài đặt', '/setting', <FontAwesomeIcon  style={{fontSize: 'unset'}} icon={faGear}  />),
];

type props = {
  theme? : string,
}

export function SiderBar2({theme}: props) {
  const themeBar = 'light';
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <Sider trigger={ <FontAwesomeIcon  style={{fontSize: 'unset'}} icon={collapsed ? faChevronRight : faChevronLeft}  />} theme={themeBar} width={250} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <img src="/logo.png" className='p-2' alt="" />
      <Menu  className='text-[24px] flex flex-col gap-5 justify-center font-medium ' theme={themeBar} selectedKeys={[location.pathname]} onClick={(e) => navigate(e.key)}  mode="inline" items={items} />
    </Sider>
  )
}