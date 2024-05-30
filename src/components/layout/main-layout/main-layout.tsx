import React, { useState } from 'react';

import { SiderBar2 } from '../siderbar.v2';
import { Layout } from 'antd';

const { Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}
import HeaderBar from '../header/headerv2';

const MainLayout2: React.FC<MainLayoutProps> = ({children}) => {
  return (
    <Layout style={{ minHeight: '100vh' }} className='flex flex-row'>
      <SiderBar2 />
      <Layout className=''>
        <HeaderBar  />
        <Content className='p-6  bg-[#F5F7FA] flex justify-center' >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout2;