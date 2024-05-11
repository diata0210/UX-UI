import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/layout/header/header';
import Sidebar from './components/layout/sidebar';

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar/>
      </div>
     
      <ToastContainer />
    </div>
  )
}