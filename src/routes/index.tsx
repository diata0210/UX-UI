import ChangePassWord from '@/components/auth/change-password'
import Register from '@/components/auth/register'
import CalendarPage from '@/page/CalendarPage'
import EvaluationPage from '@/page/EvaluationPage'
import SettingPage from '@/page/SettingPage'
import AddTaskPage from '@/page/task/AddTaskPage'
import EditTaskPage from '@/page/task/EditTaskPage'
import TaskPage from '@/page/task/TaskPage'
import TreePage from '@/page/TreePage'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from "../components/auth/login"
import MainLayout from "../components/layout/main-layout"
import HomePage from "../page/HomePage"
import Profile from '@/page/Profile'
import MainLayout2  from '@/components/layout/main-layout/main-layout'
function AllRoutes() {

  const location = useLocation();
  const [id, setId] = useState(location.pathname.split("/")[2] || "");
  useEffect(() => {
    if(location.pathname.split("/")[2]){
      setId(location.pathname.split("/")[2]);
      console.log(id);
    }
  },[]);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/change-password" element={<ChangePassWord/>} />
      <Route path="/" element={<MainLayout2><HomePage /></MainLayout2>} />
      <Route path="/calendar" element={<MainLayout2><CalendarPage /></MainLayout2>}/>
      <Route path="/task" element={<MainLayout2><TaskPage /></MainLayout2>}/>
      <Route path="/tree" element={<MainLayout2><TreePage /></MainLayout2>}/>
      <Route path="/report" element={<MainLayout2><EvaluationPage /></MainLayout2>}/>
      <Route path="/setting" element={<MainLayout2><SettingPage /></MainLayout2>}/>
      <Route path={`edit_task/${id}`} element={<MainLayout2><EditTaskPage id={id} /></MainLayout2>} />
      <Route path="/new_task" element={<MainLayout2><AddTaskPage /></MainLayout2>} />
      <Route path="/profile" element={<MainLayout2><Profile /></MainLayout2>} />
    </Routes>
  )
}

export default AllRoutes
