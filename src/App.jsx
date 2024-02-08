import { Route, Routes } from 'react-router-dom'
import './App.css'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import AddTodoPage from './pages/AddTodoPage'

function App() {


  return (
    <Routes>
      <Route exact path='/' element={<RegisterPage />} />
      <Route exact path='/login' element={<LoginPage />} />
      <Route exact path='/dashboard' element={<DashboardPage />} />
      <Route exact path='/add-todo' element={<AddTodoPage />} />
    </Routes>
  )
}

export default App
