import 'react-toastify/dist/ReactToastify.css';
import Header from '../header/header';
import Sidebar from '../sidebar';

interface MainLayoutProps {
    component: React.ComponentType<any>;
  }

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <div className="h-screen flex flex-row overflow-y-hidden">
      <Sidebar/>
      <div className="flex flex-1 flex-col">
        <Header />
        <div className="px-[10px] pt-[10px] overscroll-y-auto bg-[#F5F7FA] w-full mb-[5px]">
            <div className='px-[50px] bg-white shadow-md rounded-xl overflow-y-scroll pt-[20px]'>
              <props.component />
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout