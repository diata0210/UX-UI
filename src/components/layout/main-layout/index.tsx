import React from "react";
import Header from "../header/header";
import Sidebar from "../sidebar";
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children}) => {
  return (
    <div className="h-screen flex flex-row overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col h-full overflow-hidden">
        <Header />
        <div className="px-[10px] pt-[10px] h-full bg-[#F5F7FA] w-full overflow-y-auto">
          <div className="px-[50px] bg-white rounded-xl py-[20px] h-full overflow-y-auto ">
            {children}
          </div>
        </div>
      </div>
      {/* <Tooltip color="white" className="text-black" title="Xin chào Bean, tôi có thể giúp gì cho bạn">
        <motion.div
          initial={{
            x: 1000
          }}
          animate={{
            x: 0,
            transition: {
              duration: 1
            }
          }}
          className="fixed right-[30px] bg-yellow-200 bottom-[20px] rounded-full shadow p-[8px] "
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.2 }}
        >
          <img src="/tree_chat.png" width={40} height={30} className=""/>
        </motion.div>
      </Tooltip> */}
    </div>
  );
};

export default MainLayout;
