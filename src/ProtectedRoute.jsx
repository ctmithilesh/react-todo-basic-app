import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'universal-cookie'

const ProtectedRoute = () => {
  const cookies = new Cookies()
  let accessToken = cookies.get('accessToken')
  console.log(accessToken)

  return (
    accessToken ? <Outlet /> : <Navigate to='/login' />
  )
 
}

export default ProtectedRoute
