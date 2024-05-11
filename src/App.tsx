import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/layout/header/header';
import Sidebar from './components/layout/sidebar';

export default function App() {
  return (
    <div className="h-screen flex flex-row">
      <Sidebar/>
      <div className="flex flex-1 flex-col">
        <Header />
        <div className="">
        </div>
      </div>
     
      <ToastContainer />
    </div>
  )
}