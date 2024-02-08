import { Route, Routes } from 'react-router-dom'
import './App.css'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import AddTodoPage from './pages/AddTodoPage'
import LogoutPage from './pages/LogoutPage'
import ProtectedRoute from './ProtectedRoute'
import DeletePage from './pages/DeletePage'

function App() {


  return (
    <Routes>

      {/* Protected */}
      <Route element={<ProtectedRoute />}>
        <Route exact path='/dashboard' element={<DashboardPage />} />
      </Route>

      <Route exact path='/' element={<RegisterPage />} />
      <Route exact path='/login' element={<LoginPage />} />

      {/* Proected */}
      <Route element={<ProtectedRoute />}>
        <Route exact path='/add-todo' element={<AddTodoPage />} />
      </Route>

      <Route exact path='/delete-todo/:id' element={<DeletePage />} />

      <Route exact path='/logout' element={<LogoutPage />} />
    </Routes>
  )
}

export default App
