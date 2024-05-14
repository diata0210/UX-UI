import React from 'react';
import Header from '../header/header';
import Sidebar from '../sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-row overflow-y-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col h-full">
        <Header />
        <div className="px-[10px] pt-[10px] h-full bg-[#F5F7FA] w-full">
          <div className='px-[50px] bg-white shadow-md rounded-xl pt-[20px] h-full overflow-y-scroll'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
