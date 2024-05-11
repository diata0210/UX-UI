import { Routes, Route } from 'react-router-dom'
import MainLayout from "../components/layout/main-layout"
import HomePage from "../page/HomePage"
import Login from "../components/auth/login"


function AllRoutes() {
  return (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainLayout component={HomePage} />} />
        </Routes>
  )
}

export default AllRoutes
