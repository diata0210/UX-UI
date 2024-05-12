import 'react-toastify/dist/ReactToastify.css';
import Header from '../header/header';
import Sidebar from '../sidebar';

interface MainLayoutProps {
    component: React.ComponentType<any>;
  }

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <div className="h-screen flex flex-row">
      <Sidebar/>
      <div className="flex flex-1 flex-col">
        <Header />
        <div className="px-[30px] mt-[30px] bg-[#F5F7FA] w-full">
            <props.component />
        </div>
      </div>
    </div>
  )
}

export default MainLayout