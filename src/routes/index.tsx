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
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Login from "../components/auth/login"
import MainLayout from "../components/layout/main-layout"
import HomePage from "../page/HomePage"
import Profile from '@/page/Profile'
import LandingPage from '@/page/LandingPage'

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
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      <Route path="/calendar" element={<MainLayout><CalendarPage /></MainLayout>}/>
      <Route path="/task" element={<MainLayout><TaskPage /></MainLayout>}/>
      <Route path="/tree" element={<MainLayout><TreePage /></MainLayout>}/>
      <Route path="/evaluation" element={<MainLayout><EvaluationPage /></MainLayout>}/>
      <Route path="/setting" element={<MainLayout><SettingPage /></MainLayout>}/>
      <Route path={`edit_task/${id}`} element={<MainLayout><EditTaskPage id={id} /></MainLayout>} />
      <Route path="/new_task" element={<MainLayout><AddTaskPage /></MainLayout>} />
      <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="*" element={<Navigate to="landing-page" replace />} />
    </Routes>
  )
}

export default AllRoutes
