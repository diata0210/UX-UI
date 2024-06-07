import { IoApps, IoNotifications } from "react-icons/io5";
import {IconContext} from "react-icons";
import {motion} from 'framer-motion';
import { GoGraph } from "react-icons/go";
import { SiManageiq } from "react-icons/si";
import { FaTree } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

export default function Features() {

  const container = {
    show:{
      transition:{
        staggerChildren:0.2
      }
    }
  };

  const item = {
    hidden:{opacity:0,y:20},
    show:{
      opacity:1,
      y:0,
      transition:{
          ease:'easeInOut',
          duration:.2
      }
    }
  }

  const hoverEffect = {
    whileHover:{
        scale:1.5,rotate:630,borderRadius:"100%"
    },
    whileTap:{
        scale:.8,rotate:630,borderRadius:"100%"
    },
  }

  return (
   <div className="">
      <motion.div className="mt-[50px] mb-[70px] w-full flex-wrap flex flex-row gap-[80px] items-start justify-between" 
        variants={container} 
        initial="hidden" 
        exit="exit" 
        whileInView="show" 
        viewport={{once:false}}
      >
        <motion.div className="w-1/4 flex justify-between flex-col gap-[20px] cursor-pointer" variants={item}>
          <motion.span 
            className="bg-[#86eec2] rounded-[8px] inline-flex color-white w-[40px] h-[40px] items-center justify-center" 
            variants={hoverEffect} 
            whileHover="whileHover" 
            whileTap='whileTap'
          >
            <IconContext.Provider 
              value={{
                color:"#346cd4", 
                size:"22px"
              }}
            >
              <GoGraph />
            </IconContext.Provider>
          </motion.span>
          <div className="text-[20px] font-bold flex flex-col gap-[10px] items-start">
            <div className="">Đánh giá KPI</div>
            <div className="text-[16px] font-medium w-3/4">
              Công thức được tham khảo từ các chuyên gia hàng đầu trong nghề
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="w-1/4 flex justify-between flex-col gap-[20px] cursor-pointer" 
          variants={item}
        >
          <motion.span 
            className="bg-[#86eec2] rounded-[8px] inline-flex color-white w-[40px] h-[40px] items-center justify-center" 
            variants={hoverEffect} 
            whileHover="whileHover" 
            whileTap='whileTap'
          > 
            <IconContext.Provider value={{color:"#5700cf", size:"22px"}}>
              <IoApps/>
            </IconContext.Provider>
            </motion.span>
            <div className="text-[20px] font-bold flex flex-col gap-[10px] items-start">
            <div className="">Quản lý KPI</div>
            <div className="text-[16px] font-medium w-3/4">
              Phân chia thành các tags dễ dàng quản lý
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="w-1/4 flex justify-between flex-col gap-[20px] cursor-pointer" 
          variants={item}
        >
          <motion.span 
            className="bg-[#86eec2] rounded-[8px] inline-flex color-white w-[40px] h-[40px] items-center justify-center" 
            variants={hoverEffect} 
            whileHover="whileHover" 
            whileTap='whileTap'
          >                  
            <IconContext.Provider value={{color:"#ff8559", size:"22px"}}>
              <SiManageiq />
            </IconContext.Provider>
            </motion.span>
            <div className="text-[20px] font-bold flex flex-col gap-[10px] items-start">
            <div className="">Quản lý công việc</div>
            <div className="text-[16px] font-medium w-3/4">
              Lịch biểu rõ ràng, chi tiết quản lý theo ngày - tháng - năm
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="w-1/4 flex justify-between flex-col gap-[20px] cursor-pointer " 
          variants={item}
        >
          <motion.span 
            className="bg-[#86eec2] rounded-[8px] inline-flex color-white w-[40px] h-[40px] items-center justify-center" 
            variants={hoverEffect} 
            whileHover="whileHover" 
            whileTap='whileTap'
          >   
            <IconContext.Provider value={{color:"#fa3970", size:"22px"}}>
                <IoNotifications/>
            </IconContext.Provider>
          </motion.span>
          <div className="text-[20px] font-bold flex flex-col gap-[10px] items-start">
          <div className="">Thông báo công việc</div>
          <div className="text-[16px] font-medium w-3/4">
            Các thông báo được gửi cho bạn đúng giờ.
          </div>
          </div>
        </motion.div>
        <motion.div
          className="w-1/4 flex justify-between flex-col gap-[20px] cursor-pointer" 
          variants={item}
        >
          <motion.span 
            className="bg-[#86eec2] rounded-[8px] inline-flex color-white w-[40px] h-[40px] items-center justify-center" 
            variants={hoverEffect} 
            whileHover="whileHover" 
            whileTap='whileTap'
          >             
            <IconContext.Provider value={{color:"red", size:"22px"}}>
              <IoShareSocialOutline />
            </IconContext.Provider>
            </motion.span>
            <div className="text-[20px] font-bold flex flex-col gap-[10px] items-start">
            <div className="">Kết nối với bên thứ 3</div>
            <div className="text-[16px] font-medium w-3/4">
              Kết nối với bên thứ 3 để quản lý task
            </div>
          </div>
          </motion.div>
          <motion.div className="w-1/4 flex justify-between flex-col gap-[20px] cursor-pointer" variants={item}>
            <motion.span 
              className="bg-[#86eec2] rounded-[8px] inline-flex color-white w-[40px] h-[40px] items-center justify-center" 
              variants={hoverEffect} 
              whileHover="whileHover" 
              whileTap='whileTap'
            >                 
              <IconContext.Provider value={{color:"#06d786", size:"22px"}}>
                <FaTree />
              </IconContext.Provider>
            </motion.span>
            <div className="text-[20px] font-bold flex flex-col gap-[10px] items-start">
            <div className="">Chức năng cây</div>
            <div className="text-[16px] font-medium w-3/4">
              Với mỗi task bạn hoàn thành chúng tôi sẽ trồng 1 cây ngoài đời thực
            </div>
          </div>
        </motion.div>
      </motion.div>
   </div>
  )
}
