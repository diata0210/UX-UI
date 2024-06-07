import KPIIcon from "@/assets/icons/kpi";
import Features from "@/components/landing/features";
import { HeaderLanding } from "@/components/landing/header-landing";
import { Button } from "antd";
import {motion} from "framer-motion";

export default function LandingPage() {

  const handleLogin = () => {
    location.href = "/login"
  }

  const handleRegister = () => {
    location.href = "/register"
  }
    
  
  let  easeing = [0.6,-0.05,0.01,0.99];

  const stagger = {
    animate:{
      transition:{
        delayChildren:0.4,
        staggerChildren:0.2,
        staggerDirection:1
      }
    }
  }

  const fadeInUp = {
    initial:{
      y:-60,
      x: -1000,
      opacity:0,
      transition:{
        duration:0.6, 
        ease: easeing
      }
    },
    animate:{
      y:0,
      x: 0,
      opacity:1,
      transition:{
        duration:0.6,
        delay:0.5,
        ease: easeing
      }
    }
  };

  const transition = {
    duration:1.4,
    ease:[0.6,0.01,-0.05,0.9]
  };

  const letter = {
    initial:{
      y:400,
    },
    animate:{
      y:0,
      transition:{
        ...transition,
      }
    }
  };

  return (
    <motion.div
      initial='initial' animate='animate'
      className='w-full h-full relative px-[90px] bg-[#dfe]'
    >      
      <HeaderLanding />
      <motion.div 
        className="relative flex items-center my-[auto] justify-between"
        initial={{opacity:0,scale:0}} 
        animate={{opacity:1, scale:1}} 
        transition={{duration:0.3, ease: easeing}}
      >
        <motion.div 
          className="flex flex-col items-start gap-[60px] relative"
        >
          <div 
            className="flex flex-col items-start gap-[20px]"
          >
            <motion.div 
              className="flex flex-col items-start justify-start gap-[10px]"
              variants={fadeInUp}
            >
              <div className="text-[34px]">PhoKPI</div>
              <div className="text-[24px]">App make for tracking KPI</div>
            </motion.div>  

            <motion.div                  
              variants={letter}
              className="text-[18px]"
            >
              Nền tảng quản lý KPI hàng đầu tại Việt Nam, mang đến cho bạn sự tin cậy và dễ dàng sử dụng.
            </motion.div>
          </div>

          <motion.div 
            className="flex items-center gap-[20px]"
            variants={stagger}
          >
            <Button 
              className="w-[160px] !h-[48px] bg-primary-600 rounded-xl text-white font-medium py-[4px]"
              onClick={handleLogin}
            >Đăng nhập
            </Button>
            <Button 
              className="w-[160px] bg-primary-600 rounded-xl text-white font-medium py-[4px]"
              onClick={handleRegister}
            >Đăng ký</Button>
          </motion.div>
        </motion.div>
        <motion.div className="z-[10]">
          <KPIIcon />
        </motion.div>
      </motion.div>
      <div className="flex flex-col gap-[20px] mt-[30px]">
        <motion.div 
          className="flex justify-center text-[30px] w-full"
          variants={letter}
        >
          Chức năng nổi bật
        </motion.div>
        <Features />
      </div>
    </motion.div>
  )
}