import React from "react";
import Header from "../header/header";
import Sidebar from "../sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-row overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col h-full overflow-hidden">
        <Header />
        <div className="px-[10px] pt-[10px] h-full bg-[#F5F7FA] w-full overflow-y-auto">
          <div className="px-[50px] bg-white rounded-xl py-[20px] h-full overflow-y-auto ">
            {children}
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
