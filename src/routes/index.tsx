import Register from '@/components/auth/register'
import CalendarPage from '@/page/CalendarPage'
import EvaluationPage from '@/page/EvaluationPage'
import SettingPage from '@/page/SettingPage'
import TaskPage from '@/page/TaskPage'
import TreePage from '@/page/TreePage'
import { Route, Routes } from 'react-router-dom'
import Login from "../components/auth/login"
import MainLayout from "../components/layout/main-layout"
import HomePage from "../page/HomePage"


function AllRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/" element={<MainLayout component={HomePage} />} />
      <Route path="/calendar" element={<MainLayout component={CalendarPage} />}/>
      <Route path="/task" element={<MainLayout component={TaskPage} />}/>
      <Route path="/tree" element={<MainLayout component={TreePage} />}/>
      <Route path="/evaluation" element={<MainLayout component={EvaluationPage} />}/>
      <Route path="/setting" element={<MainLayout component={SettingPage} />}/>
    </Routes>
  )
}

export default AllRoutes
